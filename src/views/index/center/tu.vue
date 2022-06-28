<template>
  <div>
    <div id="tu" class="tu"></div>
  </div>
</template>

<script>
  import { onMounted } from 'vue';
  import * as echarts from 'echarts';
  export default {
    name: 'Tu',
    setup() {
      onMounted(() => {
        const myChart = echarts.init(document.getElementById('tu'));
        myChart.setOption({
          tooltip: {
            formatter: '{a} <br/>{b} : {c}%',
          },
          textStyle: { color: '#000000' },
          series: [
            {
              name: 'Pressure',
              type: 'gauge',
              progress: {
                show: true,
              },
              detail: {
                valueAnimation: true,
                formatter: '{value}',
                textStyle: { color: 'white', fontSize: 22 },
              },
              data: [
                {
                  value: 67.7,
                  name: '查清率',
                },
              ],
              title: {
                //设置仪表盘中间显示文字样式
                textStyle: {
                  // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  fontWeight: 'bolder',
                  fontSize: 10,
                  fontStyle: 'italic',
                  color: 'white',
                },
              },
              axisLabel: {
                //文字样式（及“10”、“20”等文字样式）
                color: 'white',
                distance: 5, //文字离表盘的距离
              },
            },
          ],
        });
      });
    },
  };
</script>

<style>
  .tu {
    height: 250px;
    width: 100%;
  }
</style>
