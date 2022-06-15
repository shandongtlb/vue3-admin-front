// @ts-nocheck
/* eslint-disable camelcase */
import { defineComponent, watch, shallowReactive } from 'vue';

// 声明类型
const PropsType = {
  cdata: {
    type: Array,
    require: true,
  },
} as const;

// 定义主体
export default defineComponent({
  props: PropsType,
  setup(props) {
    // 配置项
    let options = shallowReactive({
      showLegendSymbol: null,
      tooltip: null,
      geo: null,
      series: null,
    });
    // 设置点的位置(经纬度)
    const geoCoordMap = {
      青岛站: [120.312816, 36.064757, 20],
      青岛北站: [120.374335, 36.169159, 20],
      淄博站: [118.057711, 36.788985, 20],
      烟台站: [121.382849, 37.548293, 20],
      潍坊站: [119.097704, 36.695671, 20],
      章丘站: [117.499705, 36.72245, 20],
      章丘北站: [120.312724, 36.06472, 20],
      东营站: [118.549369, 37.357455, 20],
      荣成站: [122.408035, 37.145274, 20],
      莱西站: [120.529797, 36.823897, 20],
      董家口站: [119.713913, 35.675791, 20],
      龙口站: [120.522316, 37.619394, 20],
    };
    const seriesData = [
      {
        name: '青岛站',
      },
      {
        name: '青岛北站',
      },
      {
        name: '淄博站',
      },
      {
        name: '烟台站',
      },
      {
        name: '潍坊站',
      },
      {
        name: '章丘站',
      },
      {
        name: '章丘北站',
      },
      {
        name: '东营站',
      },
      {
        name: '荣成站',
      },
      {
        name: '莱西站',
      },
      {
        name: '董家口站',
      },
      {
        name: '龙口站',
      },
    ];
    const convertData = function (data) {
      const scatterData = [];
      for (let i = 0; i < data.length; i++) {
        const geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          scatterData.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
          });
        }
      }
      return scatterData;
    };
    const lines_coord = [
      /*
       * 写法一：标准写法对象：key:coords    value:经纬度的数组
       */
      /*
       * 写法二：数组形式，默认该点位的数组为key:coords 的值
       */
      [
        [120.312816, 36.064757],
        [119.713913, 35.675791],
      ],
      [
        [120.312816, 36.064757],
        [119.097704, 36.695671],
      ],
      [
        [120.312816, 36.064757],
        [120.529797, 36.823897],
      ],
      [
        [120.529797, 36.823897],
        [122.408035, 37.145274],
      ],
      [
        [120.529797, 36.823897],
        [122.408035, 37.145274],
      ],
      [
        [120.529797, 36.823897],
        [121.382849, 37.548293],
      ],
      [
        [119.097704, 36.695671],
        [118.057711, 36.788985],
      ],
      [
        [118.057711, 36.788985],
        [117.499705, 36.72245],
      ],
      [
        [119.097704, 36.695671],
        [120.522316, 37.619394],
      ],
      [
        [120.522316, 37.619394],
        [121.382849, 37.548293],
      ],
      [
        [118.057711, 36.788985],
        [118.549369, 37.357455],
      ],
      [
        [119.097704, 36.695671],
        [120.529797, 36.823897],
      ],
      [
        [120.312816, 36.064757],
        [117.499705, 36.72245],
      ],
    ];
    // 监听
    watch(
      () => props.cdata,
      (val: any) => {
        options = {
          showLegendSymbol: true,
          tooltip: {
            trigger: 'item',
            textStyle: {
              fontSize: 14,
              lineHeight: 22,
            },
            position: (point) => {
              // 固定在顶部
              return [point[0] + 50, point[1] - 20];
            },
            // 如果需要自定义 tooltip样式，需要使用formatter
            /*
              formatter: params => {
                return `<div style=""> ... </div>`
              }
            */
          },
          // 如果需要根据不同的数据展示深浅不一的颜色，则把这里打开
          // visualMap: {
          //   min: 0,
          //   max: 10,
          //   show: false,
          //   seriesIndex: 0,
          //   // 颜色
          //   inRange: {
          //     color: ['rgba(41,166,206, .5)', 'rgba(69,117,245, .9)'],
          //   },
          // },
          // 底部背景
          geo: [
            {
              show: true,
              aspectScale: 0.85, //长宽比
              zoom: 1.16,
              top: '10%',
              left: '13%',
              map: '山东',
              roam: false,
              itemStyle: {
                normal: {
                  borderColor: '#7ad5ff7f',
                  shadowOffsetY: 5,
                  shadowBlur: 15,
                  areaColor: 'rgba(5,21,35,0.1)',
                },
              },
            },
          ],
          series: [
            {
              name: '相关指数',
              type: 'map',
              aspectScale: 0.85, //长宽比
              zoom: 1.16, //缩放
              mapType: '山东', // 自定义扩展图表类型
              top: '9%',
              left: '12%',
              itemStyle: {
                normal: {
                  // 背景渐变色
                  areaColor: {
                    type: 'linear-gradient',
                    x: 0,
                    y: 300,
                    x2: 0,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: 'RGBA(19,96,187,1)', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: 'RGBA(7,193,223,1)', // 50% 处的颜色
                      },
                    ],
                    global: true, // 缺省为 false
                  },
                  borderColor: '#4ECEE6',
                  borderWidth: 1,
                },
                emphasis: {
                  areaColor: '#4f7fff',
                  borderColor: 'rgba(0,242,252,.6)',
                  borderWidth: 2,
                  shadowBlur: 10,
                  shadowColor: '#00f2fc',
                },
              },
              label: {
                formatter: (params) => `${params.name}`,
                show: true,
                position: 'insideRight',
                textStyle: {
                  fontSize: 14,
                  color: '#efefef',
                },
                emphasis: {
                  textStyle: {
                    color: '#fff',
                  },
                },
              },
              data: val,
            },
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              symbolSize: 7,
              effectType: 'ripple',
              legendHoverLink: false,
              showEffectOn: 'render',
              rippleEffect: {
                period: 4,
                scale: 2.5,
                brushType: 'stroke',
              },
              zlevel: 1,
              itemStyle: {
                normal: {
                  color: '#ff0000',
                  shadowBlur: 5,
                  shadowColor: '#fff',
                },
              },
              data: convertData(seriesData),
            },
            {
              // lines画线
              type: 'lines',
              coordinateSystem: 'geo',
              zlevel: 2,
              symbol: ['none', 'circle'], //设置飞线的起点终点处的绘制图形
              symbolSize: 30,
              effect: {
                show: true,
                period: 1, //箭头指向速度，值越小速度越快
                symbol: 'arrow', //飞机图标
                trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbolSize: 15, //图标大小
                color: '#FFD700',
              },
              itemStyle: {
                normal: {
                  borderWidth: 1,
                  lineStyle: {
                    type: 'solid',
                    shadowBlur: 10,
                  },
                },
              },
              lineStyle: {
                //飞线的样式
                normal: { width: 1.2, opacity: 0.6, curveness: 0, color: '#FFB800' },
              },
              data: lines_coord,
            },
          ],
        };
      },
      {
        immediate: true,
        deep: true,
      },
    );
    return () => {
      const height = '700px';
      const width = '700px';

      return (
        <div>
          <echart options={options} height={height} width={width} />
        </div>
      );
    };
  },
});
