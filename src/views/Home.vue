<template>
  <div class="home-container">
    <div class="title">业务信息</div>
    <div class="cont">
      <iframe
        class="iframe"
        src="http://10.87.0.21:18585/sbtz/insiis/snapshot/download?logId=1093190"
        frameborder="0"
      ></iframe>

      <!-- src="http://10.87.0.21:18585/sbtz/insiis/snapshot/download?logId=1093190" -->
      <!-- src="http://10.85.128.84:8000/sbtz/insiis/snapshot/download?logId=1093190" -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'

// import * as echarts from 'echarts'
import { useRoute } from 'vue-router'
import axios from '../utils/axios'

export default defineComponent({
  name: 'Home',
  setup() {
    const route = useRoute() // 第一步
    const { ticket, projid } = route.query

    const reactiveData = reactive({
      srcBase: `${window.location.origin}/sbtz/insiis/snapshot/download?logId=`,
      iframeSrc: '',
      opsenoTZ: '',
      shList: []
    })

    if (ticket && projid) {
      axios
        .get('/sys/common/NewYthInfo', {
          params: {
            ticket: ticket || '3af6414a1ad941f9b1ddf9690d5b1fb0',
            projid: projid || 'fe3f11cb7f35412db3fc45f123fccb62'
          }
        })
        .then((res: any) => {
          if (res) {
            console.log('res,,', res)
            reactiveData.iframeSrc = `${window.location.origin}/sbtz/insiis/snapshot/download?logId=`

            if (res.result.kzlist) {
              reactiveData.opsenoTZ = res.result.kzlist
            }
          }
        })
    }

    return {
      ...toRefs(reactiveData)
    }
  }
})
</script>

<style scoped lang="stylus">
.home-container {
  padding-top 10px
  background-color #fff

  .title{
    text-align left
    font-size 18px
    line-height 1.4
    padding-left 10px
    margin 0 10px 10px
    font-weight bold
    border-left 3px solid #3f90e2
  }
  .iframe{
    width 100%
    height 500px
  }
}
</style>
