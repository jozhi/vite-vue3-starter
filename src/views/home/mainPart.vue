<template>
  <div class="main">
    <div>main</div>
    <!-- <div id="chart" class="chart"></div> -->
    <echart />
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import echart from './echart/pieEchart.vue'
// import { resetScreenSize } from '@/utils/resetScreenSize'

export default defineComponent({
  name: 'Home',
  components: {
    echart
  },
  setup() {
    // onMounted(() => {
    //   resetScreenSize()
    // })
    // const reactiveData = reactive({})
    // return {
    //   ...toRefs(reactiveData)
    // }
  }
})
</script>

<style lang="stylus">
.main{
  width 1000px;
}
</style>
