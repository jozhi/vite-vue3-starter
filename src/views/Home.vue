<template>
  <div class="home-container page-container">
    <!-- <img class="vue-element-plus-logo" alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <div class="page-title">Vite2.x + Vue3.x + TypeScript + Element Plus</div> -->
    <div id="myEcharts"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'

import * as echarts from 'echarts'

export default defineComponent({
  name: 'Home',
  setup() {
    /// 声明定义一下echart
    const echart = echarts

    // 基础配置一下Echarts
    function initChart() {
      const chart = echart.init(document.getElementById('myEcharts')!, 'dark')
      // 把配置和数据放这里
      chart.setOption({
        xAxis: {
          type: 'category',
          data: [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月'
          ]
        },
        tooltip: {
          trigger: 'axis'
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320, 801, 102, 230, 4321, 4129],
            type: 'line',
            smooth: true
          }
        ]
      })

      window.onresize = () => {
        // 自适应大小
        chart.resize()
      }
    }

    onMounted(() => {
      initChart()
    })
    onUnmounted(() => {
      // eslint-disable-next-line no-unused-expressions
      echart.dispose
    })
    return { initChart }
  }
})
</script>

<style scoped lang="stylus">
.home-container {

  #myEcharts{
    width 100%
    height 500px
  }
}
</style>
