import type { FormSchema } from '@/components/core/schema-form/';
import { getRoledataList } from '@/api/system/roledata';

export const deptSchemas: FormSchema<API.CreateDeptDataParams>[] = [
  {
    field: 'name',
    component: 'Input',
    label: '名称',
    rules: [{ required: true, type: 'string' }],
  },
  {
    field: 'parentId',
    component: 'TreeSelect',
    label: '上级部门',
    componentProps: {
      getPopupContainer: () => document.body,
    },
    rules: [{ required: true, type: 'number' }],
  },
  {
    field: 'orderNum',
    component: 'InputNumber',
    label: '排序号',
    defaultValue: 255,
    componentProps: {
      style: {
        width: '100%',
      },
    },
  },
];

export const userSchemas: FormSchema<API.CreateDataParams>[] = [
  {
    field: 'departmentId',
    component: 'TreeSelect',
    label: '类型',
    componentProps: {
      getPopupContainer: () => document.body,
    },
    rules: [{ required: true, type: 'number' }],
  },
  {
    field: 'roles',
    component: 'Select',
    label: '关联标签',
    rules: [{ required: true, type: 'array' }],
    componentProps: {
      mode: 'multiple',
      request: async () => {
        const data = await getRoledataList();
        return data.map((n) => ({ label: n.name, value: n.id }));
      },
    },
  },
  {
    field: 'username',
    component: 'Input',
    label: '拼音简写',
    rules: [{ required: true }],
  },
  {
    field: 'name',
    component: 'Input',
    label: '名称',
    colProps: {
      span: 12,
    },
    rules: [{ required: true }],
  },
  {
    field: 'nickName',
    component: 'Input',
    label: '线路方位',
    colProps: {
      span: 12,
    },
  },
  {
    field: 'email',
    component: 'Input',
    label: '所属单位/所在行政区域',
    colProps: {
      span: 12,
    },
  },
  {
    field: 'phone',
    component: 'Input',
    label: '联系方式',
    colProps: {
      span: 12,
    },
  },
  {
    field: 'remark',
    component: 'InputTextArea',
    label: '负责人',
  },
  {
    field: 'status',
    component: 'RadioGroup',
    label: '状态',
    defaultValue: 1,
    componentProps: {
      options: [
        {
          label: '正常',
          value: 1,
        },
        {
          label: '异常',
          value: 0,
        },
      ],
    },
  },
];
/**
 * @description 更新用户密码
 */
export const updatePswSchemas: FormSchema[] = [
  {
    field: 'password',
    component: 'Input',
    label: '新密码',
    rules: [{ required: true, type: 'string' }],
  },
];
/**
 * @description 将用户转移部门
 */
export const transferUserSchemas: FormSchema[] = [
  {
    field: 'departmentId',
    component: 'TreeSelect',
    label: '转移至',
    rules: [{ required: true, type: 'number' }],
  },
];
