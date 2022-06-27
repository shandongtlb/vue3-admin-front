<template>
  <div>
    <div id="zhonglei" class="zhonglei"></div>
  </div>
</template>

<script>
  import { onMounted } from 'vue';
  import * as echarts from 'echarts';
  export default {
    name: 'Zhonglei',
    setup() {
      onMounted(() => {
        const myChart = echarts.init(document.getElementById('zhonglei'));
        myChart.setOption({
          title: {
            text: '案由统计情况',
            left: 'center',
          },
          toolbox: {
            feature: {
              dataView: { show: true, readOnly: false },
              saveAsImage: { show: true },
            },
          },
          grid: {
            left: '25%',
            bottom: '3%',
          },
          dataset: [
            {
              dimensions: ['name', 'score'],
              source: [
                ['危害铁路安全', 20],
                ['扰序', 44],
                ['猥亵', 14],
                ['冒用身份证', 24],
                ['殴打他人', 68],
                ['携带管制器具', 8],
                ['伪造证明文件', 18],
                ['非法持有警械', 38],
                ['诈骗', 45],
                ['收购专用器材', 8],
                ['招摇撞骗', 18],
                ['盗窃', 38],
                ['网内进人', 45],
              ],
            },
            {
              transform: {
                type: 'sort',
                config: { dimension: 'score', order: 'desc' },
              },
            },
          ],
          yAxis: {
            type: 'category',
            inverse: true,
            axisLabel: {
              interval: 0,
              rotate: 0,
              textStyle: {
                show: true,
                fontFamily: '微软雅黑',
                color: '#000000',
                fontSize: '10',
              },
            },
          },
          xAxis: {},
          series: {
            type: 'bar',
            encode: { y: 'name', x: 'score' },
            label: {
              show: true,
              textStyle: {
                color: '#ffffff',
              },
            },
            barWidth: 20,
            datasetIndex: 1,
          },
        });
      });
    },
  };
</script>

<style>
  .zhonglei {
    height: 600px;
    width: 100%;
  }
</style>
