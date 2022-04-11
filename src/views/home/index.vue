<template>
  <Left />
  <Main />
  <Right />
  <el-dialog class="dialog" v-model="dialogTableVisible" title="标题"> ~~~ </el-dialog>
  <el-button class="button" @click="dialogTableVisible = true">test</el-button>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import Left from './leftPart.vue'
import Main from './mainPart.vue'
import Right from './rightPart.vue'
import { resetScreenSize } from '@/utils/resetScreenSize'

export default defineComponent({
  name: 'Home',
  components: {
    Left,
    Main,
    Right
  },
  setup() {
    onMounted(() => {
      resetScreenSize()
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

<style>
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
