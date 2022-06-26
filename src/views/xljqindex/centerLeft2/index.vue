<template>
  <div class="centreLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-tongji4" />
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">进入人员类型</span>
          <dv-decoration-3 class="dv-dec-3" />
        </div>
      </div>
      <div class="d-flex jc-center">
        <chart />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  // @ts-nocheck
  import { defineComponent, onMounted, onUnmounted, reactive } from 'vue';
  import Chart from './chart/index';
  export default defineComponent({
    components: {
      Chart,
    },
    setup() {
      // 下层数据
      const dataArr = [
        {
          number: 12,
          text: '今日案件总量',
        },
        {
          number: 144,
          text: '本月完成数量',
        },
        {
          number: 126,
          text: '上月完成数量',
        },
        {
          number: 571,
          text: '年内完成数量',
        },
      ];
      // 对应图标
      const iconFont = [
        'icon-diagnose',
        'icon-monitoring',
        'icon-cloudupload',
        'icon-clouddownload',
      ];
      const numberData = reactive([]);
      let intervalInstance = null;
      onMounted(() => {
        setData();
        changeTiming();
      });

      const setData = () => {
        dataArr.forEach((e) => {
          numberData.push({
            config: {
              number: [e.number],
              toFixed: 1,
              content: '{nt}',
              style: {
                fontSize: 24,
              },
            },
            text: e.text,
          });
        });
      };

      const changeTiming = () => {
        intervalInstance = setInterval(() => {
          changeNumber();
        }, 2000);
      };
      const changeNumber = () => {
        numberData.forEach((item, index) => {
          item.config.number[0] += ++index;
          item.config = { ...item.config };
        });
      };
      onUnmounted(() => {
        clearInterval(intervalInstance);
      });

      return { numberData, iconFont };
    },
  });
</script>

<style lang="scss" scoped>
  $box-width: 375px;
  $box-height: 330px;

  .centreLeft1 {
    padding: 16px;
    height: $box-height;
    width: $box-width;
    border-radius: 10px;
    .bg-color-black {
      height: $box-height - 30px;
      border-radius: 10px;
    }
    .text {
      color: #c3cbde;
    }
    .dv-dec-3 {
      position: relative;
      width: 100px;
      height: 20px;
      top: -3px;
    }

    .bottom-data {
      .item-box {
        & > div {
          padding-right: 5px;
        }
        font-size: 14px;
        float: right;
        position: relative;
        width: 50%;
        color: #d3d6dd;
        .dv-digital-flop {
          width: 120px;
          height: 30px;
        }
        i {
          font-size: 20px;
          line-height: 30px;
          margin-left: 20px;
        }
        .colorYellow {
          color: yellowgreen;
        }
        p {
          text-align: center;
        }
      }
    }
  }
</style>
