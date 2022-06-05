<template>
  <div class="dashboard-container">
    <div class="home-header enter-x">
      <div class="header-left">
        <div class="header-avatar">
          <Avatar :size="70" :src="avatarUrl">
            <template #icon><UserOutlined /></template>
          </Avatar>
        </div>
        <div class="header-content">
          <div class="content-title"> {{ timeToFix }}，治安支队 </div>
          <div class="content-info">辖区线路情况分析</div>
        </div>
      </div>
      <div class="header-right">
        <div class="stat-item">
          <Statistic title="派出所总数" :value="44" />
        </div>
        <div class="stat-item">
          <Statistic title="线路总数" :value="20" />
        </div>
        <div class="stat-item">
          <Statistic title="车站总数" :value="103" />
        </div>
      </div>
    </div>

    <a-row :gutter="20" class="home-main">
      <a-col :span="20" class="home-left">
        <a-card class="pending-box enter-y" title="辖区地图" :loading="loading">
          <div>
            <Lemap />
          </div>
        </a-card>
      </a-col>
      <a-col :span="4" class="home-right">
        <a-card class="chart-box enter-y" title="各所队" :loading="loading">
          <div> </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import { ref, onMounted } from 'vue';
  import { UserOutlined } from '@ant-design/icons-vue';
  import { Statistic, Avatar } from 'ant-design-vue';
  import Lemap from './lemap.vue';
  import { timeFix } from '@/utils/timefix';
  export default {
    name: 'Xianlu',
    components: { UserOutlined, Statistic, Avatar, Lemap },
    setup() {
      // data
      const timeFormat = timeFix();
      const timeToFix = ref(timeFormat);
      const avatarUrl = ref(require('@/assets/images/logo.png'));
      const loading = ref(true);
      // mounted
      onMounted(() => {
        setTimeout(() => {
          loading.value = false;
        }, 1000);
      });
      return {
        timeToFix,
        avatarUrl,
        loading,
      };
    },
  };
</script>

<style lang="less" scoped>
  .dashboard-container {
    overflow-x: hidden;
    .home-header {
      display: flex;
      justify-content: space-between;
      background: #fff;
      padding: 24px 24px 16px;
      .header-left {
        display: flex;
        .header-avatar {
          .el-avatar {
            width: 72px;
            height: 72px;
          }
        }
        .header-content {
          margin-left: 24px;
          .content-title {
            padding: 8px 0 12px;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 500;
            font-size: 20px;
            line-height: 28px;
          }
          .content-info {
            color: rgba(0, 0, 0, 0.45);
            font-size: 14px;
          }
        }
      }
      .header-right {
        display: flex;
        .stat-item {
          padding: 0 40px;
          position: relative;
          .stat-title {
            margin-bottom: 4px;
            color: rgba(0, 0, 0, 0.45);
            font-size: 14px;
          }
          .stat-num {
            color: rgba(0, 0, 0, 0.85);
            font-size: 24px;
            line-height: 1.5;
            text-align: right;
            font-variant: tabular-nums;
            font-feature-settings: 'tnum';
          }
          &:after {
            position: absolute;
            top: 12px;
            right: 0;
            width: 1px;
            height: 40px;
            background-color: #e8e8e8;
            content: '';
          }
          &:last-child:after {
            width: 0;
          }
        }
      }
    }
    .home-main {
      display: flex;
      padding: 20px;
    }
  }
</style>

<style lang="less">
  .loopX(@n, @i: 1) when (@i =< @n ) {
    .enter-x:nth-child(@{i}) {
      opacity: 0;
      z-index: @i;
      animation: enter-x-animation 0.4s ease-in-out 0.3s;
      animation-fill-mode: forwards;
      animation-delay: @i * 0.1s;
    }
    .loopX(@n, (@i + 1));
  }
  .loopY(@n, @i: 1) when (@i =< @n ) {
    .enter-y:nth-child(@{i}) {
      opacity: 0;
      z-index: @i;
      animation: enter-y-animation 0.4s ease-in-out 0.3s;
      animation-fill-mode: forwards;
      animation-delay: @i * 0.1s;
    }
    .loopY(@n, (@i + 1));
  }
  .loopX(1);
  .loopY(4);
  @keyframes enter-x-animation {
    from {
      transform: translateX(0);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes enter-y-animation {
    from {
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
