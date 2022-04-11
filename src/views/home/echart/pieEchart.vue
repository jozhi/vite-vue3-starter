<template>
  <div class="main">
    <div>main</div>
    <div id="chart" class="chart"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'Home',
  setup() {
    onMounted(() => {})
    // dialogTableVisible
    const reactiveData = reactive({
      dialogTableVisible: false
    })
    /// 声明定义一下echart
    const echart = echarts

    function initChart() {
      const bgColor = '#fff'
      const title = '总量'
      const color = ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0']
      const echartData = [
        {
          name: 'A类',
          value: '3720'
        },
        {
          name: 'B类',
          value: '2920'
        },
        {
          name: 'C类',
          value: '2200'
        },
        {
          name: 'D类',
          value: '1420'
        }
      ]

      const formatNumber = function (num: any) {
        const reg = /(?=(\B)(\d{3})+$)/g
        return num.toString().replace(reg, ',')
      }
      const total = echartData.reduce((a, b: any) => {
        return a + b.value * 1
      }, 0)

      const chart = echart.init(document.getElementById('chart')!, 'dark')

      const option = {
        backgroundColor: bgColor,
        color,
        // tooltip: {
        //     trigger: 'item'
        // },
        title: [
          {
            text: `{name|${title}}\n{val|${formatNumber(total)}}`,
            top: 'center',
            left: 'center',
            textStyle: {
              rich: {
                name: {
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#666666',
                  padding: [10, 0]
                },
                val: {
                  fontSize: 32,
                  fontWeight: 'bold',
                  color: '#333333'
                }
              }
            }
          },
          {
            text: '单位：个',
            top: 20,
            left: 20,
            textStyle: {
              fontSize: 14,
              color: '#666666',
              fontWeight: 400
            }
          }
        ],
        series: [
          {
            type: 'pie',
            radius: ['45%', '60%'],
            center: ['50%', '50%'],
            data: echartData,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                borderColor: bgColor,
                borderWidth: 2
              }
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 120,
                lineStyle: {
                  color: '#e6e6e6'
                }
              }
            },
            label: {
              normal: {
                formatter: (params: any) => {
                  return `{icon|●}{name|${params.name}}{value|${formatNumber(
                    params.value
                  )}}`
                },
                padding: [0, -100, 25, -100],
                rich: {
                  icon: {
                    fontSize: 16
                  },
                  name: {
                    fontSize: 14,
                    padding: [0, 10, 0, 4],
                    color: '#666666'
                  },
                  value: {
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#333333'
                  }
                }
              }
            }
          }
        ]
      }
      chart.setOption(option)
    }

    onMounted(() => {
      initChart()
    })

    return {
      ...toRefs(reactiveData)
    }
  }
})
</script>

<style lang="stylus">
.main{
  width 1000px;
}
.chart{
  width 500px;
  height:300px;
}
</style>
