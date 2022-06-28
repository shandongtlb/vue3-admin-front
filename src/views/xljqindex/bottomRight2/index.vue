<template>
  <div>
    <div id="dangdao" class="dangdao"></div>
  </div>
</template>

<script>
  import { onMounted } from 'vue';
  import * as echarts from 'echarts';
  export default {
    name: 'Dangdao',
    setup() {
      onMounted(() => {
        const myChart = echarts.init(document.getElementById('dangdao'));
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
                ['淄博所', 10],
                ['南仇所', 9],
                ['博兴所', 7],
                ['东营所', 1],
                ['博山所', 1],
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
              },
            },
          },
          yAxis: {
            name: '           行人挡道所队统计',
            nameTextStyle: {
              color: '#ffffff',
            },
            max: 15,
            axisLabel: {
              textStyle: {
                color: '#ffffff',
              },
            },
          },
          series: {
            type: 'bar',
            barWidth: 35,
            label: {
              show: true,
              position: 'top',
              textStyle: {
                fontSize: '15',
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
                    color: '#D2691E', // 0% 处的颜色
                  },
                  {
                    offset: 0.6,
                    color: '#DAA520', // 60% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#DEB887', // 100% 处的颜色
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
  .dangdao {
    height: 500px;
    width: 100%;
  }
</style>
