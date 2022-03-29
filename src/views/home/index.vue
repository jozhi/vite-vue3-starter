<template>
  <Left />
  <Main />
  <Right />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
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
    return {}
  }
})
</script>

<style></style>
