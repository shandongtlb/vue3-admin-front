<template>
  <div>
    <div id="huizong" class="chart"></div>
  </div>
</template>

<script>
  import { onMounted, getCurrentInstance } from 'vue';
  export default {
    name: 'Huizong',
    setup() {
      onMounted(() => {
        const { proxy } = getCurrentInstance();
        const myChart = proxy.$echarts.init(document.getElementById('huizong'));
        myChart.setOption({
          legend: {},
          tooltip: {
            trigger: 'axis',
            showContent: false,
          },
          dataset: {
            source: [
              [
                '月份',
                '1月',
                '2月',
                '3月',
                '4月',
                '5月',
                '6月',
                '7月',
                '8月',
                '9月',
                '10月',
                '11月',
                '12月',
              ],
              [
                '非法挖掘坑穴',
                56.5,
                82.1,
                88.7,
                70.1,
                53.4,
                85.1,
                51.1,
                51.4,
                55.1,
                53.3,
                73.8,
                68.7,
              ],
              ['扰乱秩序', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7, 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
              ['冒用身份证', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5, 25.2, 37.1, 41.2, 18, 33.9, 49.1],
              [
                '伪造证明文件',
                25.2,
                37.1,
                41.2,
                18,
                33.9,
                49.1,
                56.5,
                82.1,
                88.7,
                70.1,
                53.4,
                85.1,
              ],
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
                formatter: '{b}: {@1月} ({d}%)',
              },
              encode: {
                itemName: 'product',
                value: '1月',
                tooltip: '1月',
              },
            },
          ],
        });
        myChart.on('updateAxisPointer', function (event) {
          const xAxisInfo = event.axesInfo[0];
          if (xAxisInfo) {
            const dimension = xAxisInfo.value + 1;
            myChart.setOption({
              series: {
                id: 'pie',
                label: {
                  formatter: `{b}: {@[${dimension}]} ({d}%)`,
                },
                encode: {
                  value: dimension,
                  tooltip: dimension,
                },
              },
            });
          }
        });
      });
    },
  };
</script>

<style>
  .chart {
    height: 500px;
    width: 500px;
  }
</style>
