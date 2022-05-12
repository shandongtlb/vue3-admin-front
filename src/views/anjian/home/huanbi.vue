<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
  import { ref, defineComponent } from 'vue';
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { BarChart } from 'echarts/charts';
  import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';
  import VChart, { THEME_KEY } from 'vue-echarts';

  use([CanvasRenderer, BarChart, TitleComponent, TooltipComponent, LegendComponent]);

  export default defineComponent({
    name: 'Huanbibijiao',
    components: {
      VChart,
    },
    provide: {
      [THEME_KEY]: 'light',
    },
    setup() {
      const option = ref({
        title: {
          text: '案件数据环比',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: 'category',
          data: ['拘留数', '简易数', '普裁数', '总数'],
        },
        series: [
          {
            name: '上月',
            type: 'bar',
            data: [22, 10, 40, 50],
          },
          {
            name: '本月',
            type: 'bar',
            data: [29, 15, 53, 68],
          },
        ],
      });

      return { option };
    },
  });
</script>

<style scoped>
  .chart {
    height: 400px;
    width: 400px;
  }
</style>
