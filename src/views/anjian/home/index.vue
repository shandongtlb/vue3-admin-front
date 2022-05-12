<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
  import { ref, defineComponent } from 'vue';
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { PieChart } from 'echarts/charts';
  import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';
  import VChart, { THEME_KEY } from 'vue-echarts';

  use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);
  export default defineComponent({
    name: 'Index',
    components: {
      VChart,
    },
    provide: {
      [THEME_KEY]: 'light',
    },
    setup() {
      const option = ref({
        legend: {},
        tooltip: {
          trigger: 'axis',
          showContent: false,
        },
        dataset: {
          source: [
            ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
            ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
            ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
            ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
            ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1],
          ],
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '55%' },
        series: [
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' },
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' },
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' },
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' },
          },
          {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            emphasis: {
              focus: 'self',
            },
            label: {
              formatter: '{b}: {@2012} ({d}%)',
            },
            encode: {
              itemName: 'product',
              value: '2012',
              tooltip: '2012',
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
    width: 500px;
  }
</style>
