import type { TableColumn } from '@/components/core/dynamic-table';
import router from '@/router';

export const columns: TableColumn[] = [
  {
    title: '村庄名称',
    align: 'center',
    dataIndex: 'name',
  },
  {
    title: '所属派出所',
    align: 'center',
    dataIndex: 'paichusuo',
  },
  {
    title: '所属线路',
    align: 'center',
    dataIndex: 'xianlu',
  },
  {
    title: '临近里程',
    align: 'center',
    dataIndex: 'licheng',
  },
  {
    title: '负责人',
    align: 'center',
    dataIndex: 'fuze',
  },
  {
    title: '联系方式',
    align: 'center',
    dataIndex: 'call',
  },
  {
    title: '操作',
    align: 'center',
    width: 120,
    dataIndex: '$action',
    actions: ({ record }) => [
      {
        label: '查看详情',
        onClick: () => router.push({ name: 'demos-table-lol-info', params: { id: record.heroId } }),
      },
    ],
  },
];
