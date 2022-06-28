<template>
  <div>
    <div id="qingkuang" class="qingkuang"></div>
  </div>
</template>

<script>
  import { onMounted } from 'vue';
  import * as echarts from 'echarts';
  export default {
    name: 'Qingkuang',
    setup() {
      onMounted(() => {
        const myChart = echarts.init(document.getElementById('qingkuang'));
        myChart.setOption({
          //title: {
          //text: '案件办理情况',
          //},
          grid: {
            //left: '25%',
            bottom: '6%',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999',
              },
            },
          },
          toolbox: {
            feature: {
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: true },
              saveAsImage: { show: true },
            },
          },
          legend: {
            data: ['处理人数', '拘留人数', '案件总数'],
          },
          xAxis: [
            {
              type: 'category',
              data: [
                '一月',
                '二月',
                '三月',
                '四月',
                '五月',
                '六月',
                '七月',
                '八月',
                '九月',
                '十月',
                '十一月',
                '十二月',
              ],
              axisPointer: {
                type: 'shadow',
              },
              axisLabel: { interval: 0, rotate: 0 },
            },
          ],
          yAxis: [
            {
              type: 'value',
              name: '人数',
              min: 0,
              max: 50,
              interval: 10,
              axisLine: {
                //轴线
                show: false,
              },
              splitLine: {
                //网格线
                show: false,
              },
              axisLabel: {
                formatter: '{value} 人',
              },
            },
            {
              type: 'value',
              name: '案件',
              min: 0,
              max: 80,
              interval: 10,
              axisLine: {
                //轴线
                show: false,
              },
              splitLine: {
                //网格线
                show: false,
              },
              axisLabel: {
                formatter: '{value} 起',
              },
            },
          ],
          series: [
            {
              name: '处理人数',
              type: 'bar',
              label: {
                show: true,
                textStyle: {
                  color: '#ffffff',
                },
              },
              tooltip: {
                valueFormatter(value) {
                  return `${value} 人`;
                },
              },
              data: [20, 30, 12, 19, 18, 25, 23, 37, 33, 20, 16, 33],
            },
            {
              name: '拘留人数',
              type: 'bar',
              label: {
                show: true,
                textStyle: {
                  color: '#ffffff',
                },
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
                      color: '#ff9900', // 0% 处的颜色
                    },
                    {
                      offset: 0.6,
                      color: '#ff9900', // 60% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#ff3300', // 100% 处的颜色
                    },
                  ],
                  false,
                ),
              },
              tooltip: {
                valueFormatter(value) {
                  return `${value} 人`;
                },
              },
              data: [6, 14, 8, 11, 10, 13, 15, 18, 31, 18, 11, 23],
            },
            {
              name: '案件总数',
              type: 'line',
              label: {
                show: true,
                position: 'top',
              },
              yAxisIndex: 1,
              tooltip: {
                valueFormatter(value) {
                  return `${value} 起`;
                },
              },
              data: [25, 63, 49, 42, 68, 23, 71, 62, 33, 40, 55, 23],
            },
          ],
        });
      });
    },
  };
</script>

<style>
  .qingkuang {
    height: 350px;
    width: 100%;
  }
</style>
