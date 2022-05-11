<template>
  <div>
    <div id="leibie" class="leibie-pie"></div>
  </div>
</template>

<script>
  import { onMounted } from 'vue';
  import * as echarts from 'echarts';
  export default {
    setup() {
      onMounted(() => {
        const myChart = echarts.init(document.getElementById('leibie'));
        myChart.setOption({
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line',
            },
          ],
        });
      });
    },
  };
</script>
<style>
  .leibie-pie {
    height: 25rem;
    width: 35rem;
  }
</style>
