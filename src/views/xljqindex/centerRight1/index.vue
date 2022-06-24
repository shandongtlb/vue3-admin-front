<template>
  <div class="centerRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-align-left" />
        </span>
        <span class="fs-xl text mx-2">线路警情分析</span>
      </div>
      <div class="d-flex ai-center flex-column body-box">
        <dv-capsule-chart class="dv-cap-chart" :config="config" />
        <chart />
      </div>
    </div>
  </div>
</template>

<script>
  // @ts-nocheck
  import { defineComponent, reactive } from 'vue';
  import Chart from './chart/index.tsx';

  export default defineComponent({
    components: {
      Chart,
    },
    setup() {
      const config = reactive({
        data: [
          {
            name: '非法挖掘坑穴',
            value: 167,
          },
          {
            name: '护网进人',
            value: 67,
          },
          {
            name: '损坏铁路设施',
            value: 123,
          },
          {
            name: '危害电气化铁路设备',
            value: 55,
          },
          {
            name: '其他警情',
            value: 98,
          },
        ],
      });

      return { config };
    },
  });
</script>

<style lang="scss" scoped>
  $box-height: 400px;
  $box-width: 340px;
  .centerRight1 {
    padding: 5px;
    height: $box-height;
    width: $box-width;
    border-radius: 5px;
    .bg-color-black {
      padding: 5px;
      height: $box-height;
      width: $box-width;
      border-radius: 10px;
    }
    .text {
      color: #c3cbde;
    }
    .body-box {
      border-radius: 10px;
      overflow: hidden;
      .dv-cap-chart {
        width: 100%;
        height: 160px;
      }
    }
  }
</style>
