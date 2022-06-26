// @ts-nocheck
import { defineComponent, ref, watch, shallowReactive } from 'vue';

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
    let options = shallowReactive({
      color: null,
      tooltip: null,
      toolbox: null,
      calculable: null,
      legend: null,
      series: null,
    });

    watch(
      () => props.cdata,
      (val: any) => {
        options = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
          toolbox: {
            show: true,
          },
          calculable: true,
          legend: {
            orient: 'horizontal',
            icon: 'circle',
            bottom: 0,
            x: 'center',
            data: val.xData,
            textStyle: {
              color: '#fff',
            },
          },
          series: [
            {
              name: '挡道人员年龄',
              type: 'pie',
              radius: [1, 70],
              center: ['50%', '40%'],
              itemStyle: {
                borderRadius: 5,
              },
              label: {
                show: true,
                color: '#fff',
              },
              emphasis: {
                label: {
                  show: false,
                },
              },
              data: val.seriesData,
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
      const height = '320px';
      const width = '300px';

      return (
        <div>
          <echart ref={chartRef} options={options} height={height} width={width} />
        </div>
      );
    };
  },
});
