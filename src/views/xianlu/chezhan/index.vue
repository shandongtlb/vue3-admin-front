<template>
  <div>
    <Alert message="游戏介绍" type="info" show-icon>
      <template #description> 英雄联盟 -- 根据数组格式的数据进行导出 </template>
    </Alert>
    <Card title="英雄列表mock数据" style="margin-top: 20px">
      <DynamicTable
        size="small"
        bordered
        :data-request="loadData"
        :columns="columns"
        row-key="heroid"
        export-file-name=""
        :custom-row="customRow"
      >
      </DynamicTable>
    </Card>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { Alert, Card } from 'ant-design-vue';
  import { columns } from './columns';
  import { useTable } from '@/components/core/dynamic-table';
  import { getLolHeroList } from '@/api/demos/hero';
  import { useContextMenu } from '@/hooks/functions/useContextMenu';

  defineOptions({
    name: 'DemosTablesLolTable',
  });

  const [DynamicTable] = useTable();

  const router = useRouter();
  const [createContextMenu] = useContextMenu();

  const loadData = async (params) => {
    const { data } = await getLolHeroList(params);
    return data;
  };

  const customRow = (record) => {
    return {
      onContextmenu: (e: MouseEvent) => {
        createContextMenu({
          event: e,
          items: [
            {
              label: '查看',
              handler: () => {
                console.log('record', record);
                router.push({ name: 'demos-table-lol-info', params: { id: record.heroId } });
              },
            },
            {
              label: '编辑',
              handler: () => {
                console.log('record', record);
              },
            },
          ],
        });
      },
    };
  };
</script>

<style lang="less" scoped></style>
