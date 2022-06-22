<template>
  <SplitPanel>
    <template #left-content>
      <div class="flex justify-between">
        <div>基础信息分类</div>
        <Space>
          <Tooltip v-if="$auth('sys.dept.add')" placement="top">
            <template #title>新增类型 </template>
            <PlusOutlined @click="openDeptModal({})" />
          </Tooltip>
          <Tooltip placement="top">
            <template #title>刷新 </template>
            <SyncOutlined :spin="deptListLoading" @click="fetchDeptDataList" />
          </Tooltip>
        </Space>
      </div>
      <Tree
        v-model:expandedKeys="state.expandedKeys"
        auto-expand-parent
        :tree-data="state.deptTree"
        @select="onTreeSelect"
      >
        <template #title="{ key, title, formData }">
          <Dropdown :trigger="['contextmenu']">
            <span>{{ title }}</span>
            <template #overlay>
              <Menu>
                <Menu.Item
                  key="1"
                  :disabled="!$auth('sys.dept.update')"
                  @click="openDeptModal(formData)"
                >
                  编辑 <EditOutlined />
                </Menu.Item>
                <Menu.Item key="2" :disabled="!$auth('sys.dept.delete')" @click="delDept(key)">
                  删除 <DeleteOutlined />
                </Menu.Item>
              </Menu>
            </template>
          </Dropdown>
        </template>
      </Tree>
    </template>
    <template #right-content>
      <DynamicTable
        header-title="项目管理"
        show-index
        title-tooltip="请不要随意删除。"
        :data-request="loadTableData"
        :columns="columns"
        :scroll="{ x: 2000 }"
        :row-selection="rowSelection"
      >
        <template v-if="isCheckRows" #title>
          <Alert class="w-full" type="info" show-icon>
            <template #message>
              已选 {{ isCheckRows }} 项
              <a-button type="link" @click="rowSelection.selectedRowKeys = []">取消选择</a-button>
            </template>
          </Alert>
        </template>
        <template #toolbar>
          <a-button type="primary" :disabled="!$auth('sys.user.add')" @click="openUserModal({})">
            <PlusOutlined /> 新增
          </a-button>
          <ImpExcel />
          <a-button type="success" @click="openExportModal"> 批量导出 </a-button>
        </template>
      </DynamicTable>
    </template>
  </SplitPanel>
</template>

<script setup lang="tsx">
  import { ref, reactive, computed } from 'vue';
  import {
    SyncOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    ExclamationCircleOutlined,
  } from '@ant-design/icons-vue';
  import { Tree, Dropdown, Space, Tooltip, Modal, Alert, Menu } from 'ant-design-vue';
  import { userSchemas, deptSchemas, updatePswSchemas } from './formSchemas';
  import { baseColumns, type TableListItem, type TableColumnItem } from './columns';
  import type { LoadDataParams } from '@/components/core/dynamic-table';
  import { SplitPanel } from '@/components/basic/split-panel';
  import { useTable } from '@/components/core/dynamic-table';
  import {
    deleteDatas,
    getDataListPage,
    getDataInfo,
    createData,
    updateData,
    updateDataPassword,
  } from '@/api/system/data';
  import {
    createDeptData,
    deleteDeptData,
    updateDeptData,
    getDeptDataList,
  } from '@/api/system/deptdata';
  import { useFormModal } from '@/hooks/useModal/index';
  import { TreeDataItem, formatDept2Tree, findChildById } from '@/core/permission/utils';
  import { useExportExcelModal, jsonToSheetXlsx, ImpExcel } from '@/components/basic/excel';
  defineOptions({
    name: 'SystemData',
  });

  interface State {
    expandedKeys: number[];
    departmentIds: number[];
    deptTree: TreeDataItem[];
  }

  const [DynamicTable, dynamicTableInstance] = useTable();
  const [showModal] = useFormModal();

  const deptListLoading = ref(false);

  const state = reactive<State>({
    expandedKeys: [],
    departmentIds: [],
    deptTree: [],
  });

  const rowSelection = ref({
    selectedRowKeys: [] as number[],
    onChange: (selectedRowKeys: number[], selectedRows: TableListItem[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      rowSelection.value.selectedRowKeys = selectedRowKeys;
    },
  });
  const exportExcelModal = useExportExcelModal();
  let tableData: any[] = [];
  const openExportModal = () => {
    exportExcelModal.openModal({
      onOk: ({ filename, bookType }) => {
        // 默认Object.keys(data[0])作为header
        jsonToSheetXlsx({
          data: tableData,
          filename,
          write2excelOpts: {
            bookType,
          },
        });
      },
    });
  };
  // 是否勾选了表格行
  const isCheckRows = computed(() => rowSelection.value.selectedRowKeys.length);

  /**
   * @description 打开部门弹窗
   */
  const openDeptModal = async (record: Partial<API.SysDeptDataListResult> = {}) => {
    console.log('record', record);

    const [formRef] = await showModal<any>({
      modalProps: {
        title: `${record.id ? '编辑' : '新增'}类型`,
        width: 700,
        onFinish: async (values) => {
          console.log('新增/编辑类型', values);
          values.id = record.id;
          await (record.id ? updateDeptData : createDeptData)(values);
          fetchDeptDataList();
        },
      },
      formProps: {
        labelWidth: 100,
        schemas: deptSchemas,
      },
    });

    formRef?.updateSchema([
      {
        field: 'parentId',
        componentProps: {
          treeDefaultExpandedKeys: [-1].concat(record?.keyPath || []),
          treeData: [
            {
              value: -1,
              title: '#',
              children: state.deptTree,
            },
          ],
        },
      },
    ]);

    formRef?.setFieldsValue({
      ...record,
      parentId: record.parentId ?? -1,
    });
  };

  /**
   * @description 将选中的用户转移至某部门
   */

  /**
   * @description 打开用户弹窗
   */
  const openUserModal = async (record: Partial<TableListItem> = {}) => {
    const [formRef] = await showModal<any>({
      modalProps: {
        title: `${record.id ? '编辑' : '新增'}内容`,
        width: 700,
        onFinish: async (values) => {
          console.log('新增/编辑内容', values);
          values.id = record.id;
          await (record.id ? updateData : createData)(values);
          dynamicTableInstance?.reload();
        },
      },
      formProps: {
        labelWidth: 100,
        schemas: userSchemas,
      },
    });

    formRef?.updateSchema([
      {
        field: 'departmentId',
        componentProps: {
          treeDefaultExpandedKeys:
            findChildById(record?.departmentId, state.deptTree)?.keyPath || [],
          treeData: state.deptTree,
        },
      },
    ]);

    formRef?.setFieldsValue(record);
    if (record?.id) {
      const { roles } = await getDataInfo({ userId: record.id });
      formRef?.setFieldsValue({ roles });
    }
  };

  const openUpdatePasswordModal = async (record: TableListItem) => {
    await showModal({
      modalProps: {
        title: `修改密码(${record.username})`,
        width: 700,
        onFinish: async (values) => {
          await updateDataPassword({
            userId: record.id,
            password: values.password,
          });
        },
      },
      formProps: {
        labelWidth: 100,
        schemas: updatePswSchemas,
      },
    });
  };

  const delDept = (departmentId: number) => {
    Modal.confirm({
      title: '确定要删除该部门吗?',
      icon: <ExclamationCircleOutlined />,
      centered: true,
      onOk: async () => {
        await deleteDeptData({ departmentId });
        fetchDeptDataList();
      },
    });
  };
  /**
   * 获取部门列表
   */
  const fetchDeptDataList = async () => {
    deptListLoading.value = true;
    const dept = await getDeptDataList().finally(() => (deptListLoading.value = false));
    state.deptTree = formatDept2Tree(dept);
    state.expandedKeys = [...state.expandedKeys, ...state.deptTree.map((n) => Number(n.key))];
  };
  fetchDeptDataList();
  /**
   * @description 表格删除行
   */
  const delRowConfirm = async (userId: number | number[]) => {
    if (Array.isArray(userId)) {
      Modal.confirm({
        title: '确定要删除所选的内容吗?',
        icon: <ExclamationCircleOutlined />,
        centered: true,
        onOk: async () => {
          await deleteDatas({ userIds: userId });
          fetchDeptDataList();
        },
      });
    } else {
      await deleteDatas({ userIds: [userId] }).finally(dynamicTableInstance?.reload);
    }
  };

  /**
   * 点击部门
   */
  const onTreeSelect = (selectedKeys: number[]) => {
    state.departmentIds = selectedKeys;
    dynamicTableInstance?.reload?.();
  };

  const loadTableData = async ({ page, limit }: LoadDataParams) => {
    const data = await getDataListPage({
      page,
      limit,
      departmentIds: state.departmentIds.length ? state.departmentIds : undefined,
    });
    tableData = data.list;
    rowSelection.value.selectedRowKeys = [];
    return data;
  };

  const columns: TableColumnItem[] = [
    ...baseColumns,
    {
      title: '操作',
      width: 150,
      dataIndex: '$action',
      align: 'center',
      fixed: 'right',
      actions: ({ record }) => [
        {
          label: '编辑',
          auth: {
            perm: 'sys.user.update',
            effect: 'disable',
          },
          onClick: () => openUserModal(record),
        },
        {
          label: '详情',
          auth: 'sys.user.password',
          onClick: () => openUpdatePasswordModal(record),
        },
        {
          label: '删除',
          auth: 'sys.data.delete',
          popConfirm: {
            title: '你确定要删除吗？',
            onConfirm: () => delRowConfirm(record.id),
          },
        },
      ],
    },
  ];
</script>

<style></style>
