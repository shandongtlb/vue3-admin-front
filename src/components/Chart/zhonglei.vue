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
          dataset: [
            {
              dimensions: ['name', 'score'],
              source: [
                ['危害铁路安全', 20],
                ['扰乱公共交通工具上的秩序', 44],
                ['猥亵', 14],
                ['冒用居民身份证', 24],
                ['殴打他人', 68],
                ['非法携带管制器具', 8],
                ['变造、使用变造的证明文件', 18],
                ['非法持有警械', 38],
                ['诈骗', 45],
                ['违法收购铁路废旧专用器材', 8],
                ['招摇撞骗', 18],
                ['盗窃', 38],
                ['擅自进入铁路防护网', 45],
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
            axisLabel: { interval: 0, rotate: 23 },
          },
          yAxis: {},
          series: {
            type: 'bar',
            encode: { x: 'name', y: 'score' },
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
