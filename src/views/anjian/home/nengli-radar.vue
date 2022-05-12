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
    name: 'HelloWorld',
    components: {
      VChart,
    },
    provide: {
      [THEME_KEY]: 'light',
    },
    setup() {
      const option = ref({
        title: {
          text: '能力分析',
        },
        legend: {
          data: ['Allocated Budget', 'Actual Spending'],
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '数据研判', max: 6500 },
            { name: '安检查危', max: 16000 },
            { name: '进站查缉', max: 30000 },
            { name: '线路巡护', max: 38000 },
            { name: '站车移交', max: 52000 },
            { name: '内部安全', max: 25000 },
          ],
          radius: 80,
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [5000, 14000, 28000, 26000, 21000, 1000],
                name: '能力分析',
              },
            ],
          },
        ],
      });

      return { option };
    },
  });
</script>

<style scoped>
  .chart {
    height: 450px;
    width: 450px;
  }
</style>
