<template>
  <div>
    <div id="suodui" class="suodui"></div>
  </div>
</template>

<script>
  import { onMounted } from 'vue';
  import * as echarts from 'echarts';
  export default {
    name: 'Suodui',
    setup() {
      onMounted(() => {
        const myChart = echarts.init(document.getElementById('suodui'));
        myChart.setOption({
          dataset: [
            {
              dimensions: ['name', 'score'],
              source: [
                ['青岛北所', 120],
                ['淄博所', 44],
                ['青岛所', 14],
                ['潍坊所', 24],
                ['烟台南所', 68],
                ['潍坊北所', 8],
                ['莱阳所', 18],
                ['淄博北所', 38],
                ['青岛西所', 45],
              ],
            },
            {
              transform: {
                type: 'sort',
                config: { dimension: 'score', order: 'desc' },
              },
            },
          ],
          xAxis: {
            type: 'category',
            axisLabel: { interval: 0, rotate: 30 },
          },
          yAxis: {},
          series: {
            type: 'bar',
            barWidth: 30,
            label: {
              show: true,
              position: 'top',
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                  {
                    offset: 0,
                    color: '#1268f3', // 0% 处的颜色
                  },
                  {
                    offset: 0.6,
                    color: '#08a4fa', // 60% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#01ccfe', // 100% 处的颜色
                  },
                ],
                false,
              ),
            },
            encode: { x: 'name', y: 'score' },
            datasetIndex: 1,
          },
        });
      });
    },
  };
</script>

<style>
  .suodui {
    height: 400px;
    width: 100%;
  }
</style>
