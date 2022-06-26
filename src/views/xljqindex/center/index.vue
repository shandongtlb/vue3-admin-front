<template>
  <div class="center">
    <div class="up">
      <div v-for="item in titleItem" :key="item.title" class="bg-color-black item">
        <p class="ml-3 colorBlue fw-b">{{ item.title }}</p>
        <div>
          <dv-digital-flop class="dv-dig-flop ml-1 mt-1 pl-3" :config="item.config" />
        </div>
      </div>
    </div>
    <div class="down">
      <div class="percent">
        <div class="water">
          <span class="fs-xl text mx-3">案件查清率</span>
          <dv-water-level-pond class="dv-wa-le-po" :config="water" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ts-nocheck
  import { defineComponent, reactive, onMounted } from 'vue';

  export default defineComponent({
    setup() {
      // 下层数据
      const titleDate = [
        {
          number: 0,
          text: '危行案件',
        },
        {
          number: 0,
          text: '路外伤亡',
        },
        {
          number: 13,
          text: '护网进人',
        },
        {
          number: 12,
          text: '行人挡道',
        },
        {
          number: 25,
          text: '线路警情总数',
        },
        {
          number: 20,
          text: '警情查清数量',
        },
      ];
      const titleItem = reactive([]);

      // 初始化数据
      onMounted(() => {
        setData();
      });

      const ranking = reactive({
        data: [
          {
            name: '青岛所',
            value: 55,
          },
          {
            name: '青岛北所',
            value: 40,
          },
          {
            name: '淄博所',
            value: 78,
          },
          {
            name: '烟台所',
            value: 66,
          },
          {
            name: '潍坊所',
            value: 80,
          },
          {
            name: '淄博北所',
            value: 80,
          },
          {
            name: '邹平所',
            value: 10,
          },
          {
            name: '章丘北所',
            value: 80,
          },
          {
            name: '潍坊北所',
            value: 80,
          },
          {
            name: '青岛西所',
            value: 80,
          },
        ],
        carousel: 'single',
        unit: '起',
      });

      const water = reactive({
        data: [60, 75],
        shape: 'roundRect',
        formatter: '{value}%',
        waveNum: 6,
      });

      const rate = reactive([
        {
          id: 'centerRate1',
          tips: 60,
          colorData: {
            textStyle: '#3fc0fb',
            series: {
              color: ['#00bcd44a', 'transparent'],
              dataColor: {
                normal: '#03a9f4',
                shadowColor: '#97e2f5',
              },
            },
          },
        },
        {
          id: 'centerRate2',
          tips: 40,
          colorData: {
            textStyle: '#67e0e3',
            series: {
              color: ['#faf3a378', 'transparent'],
              dataColor: {
                normal: '#ff9800',
                shadowColor: '#fcebad',
              },
            },
          },
        },
      ]);

      // 设置数据
      const setData = () => {
        titleDate.map((e) => {
          titleItem.push({
            title: e.text,
            config: {
              number: [e.number],
              toFixed: 1,
              textAlign: 'left',
              content: '{nt}',
              style: {
                fontSize: 26,
              },
            },
          });
        });
      };
      return {
        titleItem,
        ranking,
        water,
        rate,
      };
    },
  });
</script>

<style lang="scss" scoped>
  .center {
    display: flex;
    flex-direction: column;
    .up {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .item {
        border-radius: 6px;
        padding-top: 8px;
        margin-top: 8px;
        width: 32%;
        height: 70px;
        .dv-dig-flop {
          width: 150px;
          height: 30px;
        }
      }
    }
    .down {
      padding: 6px 4px;
      padding-bottom: 0;
      width: 100%;
      display: flex;
      height: 255px;
      justify-content: space-between;
      .bg-color-black {
        border-radius: 5px;
      }
      .ranking {
        padding: 10px;
        width: 59%;
        .dv-scr-rank-board {
          height: 220px;
        }
      }
      .percent {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .water {
          width: 100%;
          .dv-wa-le-po {
            height: 225px;
          }
        }
      }
    }
  }
</style>
