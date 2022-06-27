<template>
  <div>
    <div id="nengli" class="nengli"></div>
  </div>
</template>

<script>
  import { onMounted } from 'vue';
  import * as echarts from 'echarts';
  export default {
    name: 'Nengli',
    setup() {
      onMounted(() => {
        const myChart = echarts.init(document.getElementById('nengli'));
        myChart.setOption({
          backgroundColor: '#fff',
          title: {
            text: '',
          },
          tooltip: {},
          radar: {
            axisName: {
              textStyle: {
                color: '#666',
              },
            },
            indicator: [
              { name: '数据研判', max: 100 },
              { name: '安检', max: 100 },
              { name: '站车移交', max: 100 },
              { name: '线路巡护', max: 100 },
              { name: '内保', max: 100 },
              { name: '涉疫', max: 100 },
            ],
          },
          series: [
            {
              type: 'radar',
              data: [
                {
                  name: '占比',
                  value: [50, 75, 60, 55, 30, 20],
                  itemStyle: {
                    color: '#188FFD',
                  },
                  lineStyle: {
                    color: '#188FFD',
                  },
                },
              ],
            },
          ],
        });
      });
    },
  };
</script>

<style>
  .nengli {
    height: 430px;
    width: 100%;
  }
</style>
