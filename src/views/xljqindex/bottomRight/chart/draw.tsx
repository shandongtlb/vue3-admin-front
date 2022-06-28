// @ts-nocheck
import { defineComponent, watch, ref } from 'vue';
import * as echarts from 'echarts';
// 声明类型
const PropsType = {
  cdata: {
    type: Object,
    require: true,
  },
} as const;

// 定义主体
export default defineComponent({
  props: PropsType,
  setup(props) {
    // 定义 ref
    const chartRef = ref();
    // 配置项
    let options = {};

    // 监听
    watch(
      () => props.cdata,
      (val: any) => {
        options = {
          tooltip: {
            show: true,
            trigger: 'item',
            axisPointer: {
              type: 'shadow',
              label: {
                show: true,
                backgroundColor: '#7B7DDC',
              },
            },
          },
          legend: {
            show: true,
          },
          grid: {
            x: '7%',
            width: '88%',
            top: '5%',
            bottom: '15%',
          },
          xAxis: {
            data: val.category,
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
            axisLine: {
              lineStyle: {
                color: '#B4B4B4',
              },
            },
            axisTick: {
              show: false,
            },
          },
          yAxis: [
            {
              splitLine: { show: false },
              max: 15,
              axisLine: {
                lineStyle: {
                  color: '#B4B4B4',
                },
              },

              axisLabel: {
                formatter: '{value} ',
              },
            },
            {
              splitLine: { show: false },
              max: 15,
              axisLine: {
                lineStyle: {
                  color: '#B4B4B4',
                },
              },
              axisLabel: {
                formatter: '{value} ',
              },
            },
          ],
          series: [
            {
              name: '警情总数',
              type: 'line',
              smooth: true,
              showAllSymbol: true,
              symbol: 'emptyCircle',
              symbolSize: 18,
              yAxisIndex: 1,
              itemStyle: {
                normal: {
                  color: '#F02FC2',
                },
              },
              data: val.rateData,
            },
            {
              name: '警情未查清',
              type: 'bar',
              label: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#ffffff',
                },
              },
              barWidth: 35,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#ADFF2F' },
                    { offset: 1, color: '#FFFF00' },
                  ]),
                },
              },
              data: val.barData,
            },
            {
              name: '警情查清数',
              type: 'bar',
              label: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#ffffff',
                },
              },
              barGap: '-100%',
              barWidth: 35,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#41ee94' },
                    { offset: 0.5, color: '#2e8b57' },
                    { offset: 1, color: '#008b00' },
                  ]),
                },
              },
              z: -12,
              data: val.lineData,
            },
          ],
        };
        // 手动触发更新
        if (chartRef.value) {
          // 通过初始化参数打入数据
          chartRef.value.initChart(options);
        }
      },
      {
        immediate: true,
        deep: true,
      },
    );

    return () => {
      const height = '450px';
      const width = '100%';

      return (
        <div>
          <echart ref={chartRef} height={height} width={width} />
        </div>
      );
    };
  },
});
