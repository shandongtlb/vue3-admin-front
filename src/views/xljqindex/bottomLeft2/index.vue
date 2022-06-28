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
          grid: {
            top: '14%',
            left: '10%',
            //bottom: '28%',
          },
          dataset: [
            {
              dimensions: ['name', 'score'],
              source: [
                ['珠玑所', 5],
                ['城阳所', 4],
                ['蓝村所', 2],
                ['潍西所', 2],
                ['烟北所', 2],
                ['胶州所', 2],
                ['邹平所', 2],
                ['诸城所', 2],
                ['高密所', 2],
                ['莱西所', 1],
                ['莱阳所', 1],
                ['黄岛所', 1],
                ['蓬莱市所', 1],
                ['平度所', 1],
                ['东风所', 1],
                ['四方所', 1],
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
            axisLabel: {
              interval: 0,
              formatter(value) {
                return value.split('').join('\n');
              },
              textStyle: {
                color: '#ffffff',
                fontSize: '13',
              },
            },
          },
          yAxis: {
            name: '           网内进人所队统计',
            max: 8,
            nameTextStyle: {
              color: '#ffffff',
            },
            axisLabel: {
              textStyle: {
                color: '#ffffff',
              },
            },
          },
          series: {
            type: 'bar',
            barWidth: 20,
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#ffffff',
              },
            },
            axisLine: {
              //轴线
              show: false,
            },
            splitLine: {
              //网格线
              show: false,
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
                    color: '#1e90ff', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#e0ffff', // 100% 处的颜色
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
    height: 500px;
    width: 100%;
  }
</style>
