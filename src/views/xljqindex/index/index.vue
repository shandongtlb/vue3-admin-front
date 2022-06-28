<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="['#568aea', '#000000']" />
            <div class="title">
              <span class="title-text">{{ title1 }}</span>
              <dv-decoration-6 class="dv-dec-6" :reverse="true" :color="['#50e3c2', '#67a1e5']" />
            </div>
            <dv-decoration-8 class="dv-dec-8" :reverse="true" :color="['#568aea', '#000000']" />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex aside-width">
            <div class="react-left ml-4 react-l-s">
              <span class="react-before"></span>
              <span class="text">
                {{ timeInfo.dateYear }} {{ timeInfo.dateWeek }}
                {{ timeInfo.dateDay }}
              </span>
            </div>
          </div>
        </div>

        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="content-box">
            <div>
              <dv-border-box-12>
                <center-left1 />
              </dv-border-box-12>
            </div>
            <div>
              <dv-border-box-12>
                <center-left2 />
              </dv-border-box-12>
            </div>
            <!-- 中间 -->
            <div>
              <dv-border-box-12>
                <center />
              </dv-border-box-12>
            </div>
            <!-- 中间 -->
            <dv-border-box-12>
              <center-left3 />
            </dv-border-box-12>
            <div>
              <dv-border-box-13>
                <center-left4 />
              </dv-border-box-13>
            </div>
          </div>
          <!-- 第四行数据 -->
          <div class="bototm-box">
            <dv-border-box-12>
              <bottom-left />
            </dv-border-box-12>
            <dv-border-box-12>
              <bottom-left2 />
            </dv-border-box-12>
            <dv-border-box-12>
              <bottom-right />
            </dv-border-box-12>
            <dv-border-box-12>
              <bottom-right2 />
            </dv-border-box-12>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  // @ts-nocheck
  /* eslint-disable */
  import { defineComponent, ref, reactive, onMounted, onUnmounted } from 'vue';
  import CenterLeft1 from '../centerLeft1/index.vue';
  import CenterLeft2 from '../centerLeft2/index.vue';
  import CenterLeft3 from '../centerLeft3/index.vue';
  import CenterLeft4 from '../centerLeft4/index.vue';
  import Center from '../center/index.vue';
  import BottomLeft from '../bottomLeft/index.vue';
  import BottomLeft2 from '../bottomLeft2/index.vue';
  import BottomRight from '../bottomRight/index.vue';
  import BottomRight2 from '../bottomRight2/index.vue';
  import { title1, subtitle, moduleInfo, WEEK } from '@/constant/index';
  import useDraw from '@/utils/useDraw';
  import { formatTime } from '@/utils/index2';

  export default defineComponent({
    name: 'Home',
    components: {
    CenterLeft1,
    CenterLeft2,
    CenterLeft3,
    CenterLeft4,
    Center,
    BottomLeft,
    BottomLeft2,
    BottomRight,
    BottomRight2,
},
    setup() {
      // * 加载标识
      const loading = ref<boolean>(true);
      // * 时间内容
      const timeInfo = reactive({
        setInterval: 0,
        dateDay: '',
        dateYear: '',
        dateWeek: '',
      });
      // * 适配处理
      const { appRef, calcRate, windowDraw, unWindowDraw } = useDraw();
      // 生命周期
      onMounted(() => {
        cancelLoading();
        handleTime();
        // todo 屏幕适应
        windowDraw();
        calcRate();
      });

      onUnmounted(() => {
        unWindowDraw();
        clearInterval(timeInfo.setInterval);
      });

      // methods
      // todo 处理 loading 展示
      const cancelLoading = () => {
        setTimeout(() => {
          loading.value = false;
        }, 500);
      };

      // todo 处理时间监听
      const handleTime = () => {
        timeInfo.setInterval = setInterval(() => {
          const date = new Date();
          timeInfo.dateDay = formatTime(date, 'HH: mm: ss');
          timeInfo.dateYear = formatTime(date, 'yyyy-MM-dd');
          timeInfo.dateWeek = WEEK[date.getDay()];
        }, 1000);
      };

      // return
      return {
        loading,
        timeInfo,
        appRef,
        title1,
        subtitle,
        moduleInfo,
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/jq.scss';
</style>
