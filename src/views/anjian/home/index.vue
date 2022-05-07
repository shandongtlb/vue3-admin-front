<template>
  <ve-line-chart :data="chartData" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: {
          name: 'Week',
          data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
        },
        measures: [{
          name: 'Vue',
          data: [30, 40, 35, 50, 49, 70, 90]
        }]
      }
    }
  }
</script>
