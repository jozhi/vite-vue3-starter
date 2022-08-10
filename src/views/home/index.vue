<template>
  <div class="top"><Header /></div>
  <div class="body">
    <Left />
    <Main />
    <Right />
  </div>
  <el-dialog class="dialog" v-model="dialogTableVisible" title="标题"> ~~~ </el-dialog>
  <el-button class="button" @click="dialogTableVisible = true">test</el-button>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import Header from '@/components/Header.vue'
import Left from './leftPart.vue'
import Main from './mainPart.vue'
import Right from './rightPart.vue'
// import { resetScreenSize } from '@/utils/resetScreenSize'

export default defineComponent({
  name: 'Home',
  components: {
    Left,
    Main,
    Right,
    Header
  },
  setup() {
    onMounted(() => {
      // resetScreenSize()
    })
    // dialogTableVisible
    const reactiveData = reactive({
      dialogTableVisible: false
    })

    return {
      ...toRefs(reactiveData)
    }
  }
})
</script>

<style scoped lang="stylus">

.top {
  position relative
  box-sizing border-box
  width 100%
  height $top-height
  margin-bottom 10px
}

.body {
  position relative
  box-sizing border-box
  width 100%
  height 100%
  display flex
  justify-content space-between
}

.dialog {
  position: absolute;
  top: 0;
  left: 0;

  width: 400px;
  height: 250px;
}
.button {
  position: absolute;
  top: 0;
  left: 50%;
}
</style>
