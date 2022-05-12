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
    name: 'Jingqingtongji',
    components: {
      VChart,
    },
    provide: {
      [THEME_KEY]: 'light',
    },
    setup() {
      const option = ref({
        title: {
          text: '案件数量统计',
          subtext: 'Fake Data',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Rainfall', 'Evaporation'],
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            // prettier-ignore
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '2021年',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' },
              ],
            },
          },
          {
            name: '2022年',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 160.2, 48.7, 18.8, 6.0, 2.3],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' },
              ],
            },
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
    width: 450px;
  }
</style>
