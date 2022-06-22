import { Space, Tag } from 'ant-design-vue';
import type { TableColumn } from '@/components/core/dynamic-table';

export type TablexqItem = API.DataListPageResultItem;
export type TableXqItem = TableColumn<TablexqItem>;

export const baseColumnsxq: TableXqItem[] = [
  {
    title: '名称',
    width: 120,
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: '类型',
    dataIndex: 'departmentName',
    hideInSearch: true,
    align: 'center',
    width: 180,
  },
  {
    title: '关联标签',
    dataIndex: 'roleNames',
    align: 'center',
    hideInSearch: true,
    width: 220,
    //or bodyCell
    customRender: ({ text }) => (
      <Space>
        {text.map((item) => (
          <Tag color={'success'} key={item}>
            {item}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: '线路方位',
    width: 120,
    align: 'center',
    dataIndex: 'nickName',
  },
  {
    title: '所属单位/所在行政区域',
    width: 120,
    align: 'center',
    dataIndex: 'email',
  },
  {
    title: '负责人',
    width: 120,
    align: 'center',
    dataIndex: 'remark',
  },
  {
    title: '联系方式',
    width: 120,
    align: 'center',
    dataIndex: 'phone',
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 100,
    formItemProps: {
      component: 'Select',
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
    bodyCell: ({ record }) => {
      const isEnable = record.status === 1;
      return <Tag color={isEnable ? 'success' : 'red'}>{isEnable ? '启用' : '禁用'}</Tag>;
    },
  },
];
