<template>
  <div>
    <div id="xifen" class="chart1"></div>
  </div>
</template>

<script>
  import { onMounted } from 'vue';
  import * as echarts from 'echarts';
  export default {
    name: 'Xifen',
    setup() {
      onMounted(() => {
        const myChart = echarts.init(document.getElementById('xifen'));
        const datas = [
          ////////////////////////////////////////
          [
            { name: '殴打他人', value: 5.6 },
            { name: '寻衅滋事', value: 1 },
            { name: '扰乱公共秩序', value: 0.8 },
            { name: '危害铁路安全', value: 0.5 },
            { name: '盗窃', value: 0.5 },
            { name: '冒用居民身份证', value: 3.8 },
            { name: '其它', value: 3.8 },
          ],
          // ////////////////////////////////////////
          [
            { name: '非法携带管制器具', value: 3.8 },
            { name: '使用变造证明文件', value: 2.3 },
            { name: '非法持有警械', value: 2.2 },
            { name: '扰乱公共场所秩序', value: 1.3 },
            { name: '非法携带危险物质', value: 1.2 },
            { name: '冒用居民身份证', value: 5.7 },
            { name: '其它', value: 3.8 },
          ],
          ////////////////////////////////////////
          [
            { name: '损坏铁路设施', value: 3.5 },
            { name: '护网进人', value: 2.8 },
            { name: '擅自移动铁路安全标志', value: 1.7 },
            { name: '非法挖掘坑穴', value: 1.4 },
            { name: '行走坐卧，抢越线路', value: 0.5 },
            { name: '其它', value: 3.8 },
          ],
        ];
        myChart.setOption({
          title: {
            text: '站、车、线案件占比',
            left: 'center',
          },
          toolbox: {
            feature: {
              dataView: { show: true, readOnly: false },
              saveAsImage: { show: true },
            },
          },
          series: datas.map(function (data, idx) {
            const top = idx * 33.3;
            return {
              type: 'pie',
              radius: [20, 60],
              top: `${top}%`,
              height: '33.33%',
              left: 'center',
              width: 275,
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,
              },
              label: {
                alignTo: 'edge',
                formatter: '{name|{b}}\n{time|{c} 起}',
                minMargin: 5,
                edgeDistance: 10,
                lineHeight: 12,
                rich: {
                  time: {
                    fontSize: 11,
                    color: '#999',
                  },
                },
              },
              labelLine: {
                length: 12,
                length2: 0,
                maxSurfaceAngle: 80,
              },
              labelLayout(params) {
                const isLeft = params.labelRect.x < myChart.getWidth() / 2;
                const points = params.labelLinePoints;
                // Update the end point.
                points[2][0] = isLeft
                  ? params.labelRect.x
                  : params.labelRect.x + params.labelRect.width;
                return {
                  labelLinePoints: points,
                };
              },
              data,
            };
          }),
        });
      });
    },
  };
</script>

<style>
  .chart1 {
    height: 600px;
    width: 100%;
  }
</style>
