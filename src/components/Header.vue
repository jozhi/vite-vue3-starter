<template>
  <div class="header">
    <div class="title" @click="router.push('/')">
      Vite2.x + Vue3.x + TypeScript Starter
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

// eslint-disable-next-line no-unused-vars
// const router = useRouter()

export default defineComponent({
  name: 'Header',
  components: {},
  setup() {
    const router = useRouter()

    return {
      router
    }
  }
})
</script>

<style scoped lang="stylus">

.header {
  width 100%
  height 100%
  background #fff
  display flex
  justify-content space-between
  align-items center
  padding 0 20px
  box-sizing border-box
  font-weight bold

  .title {
    font-size 20px
    cursor pointer
  }

  // .go-github {
  //   cursor pointer
  //   font-size 16px

  //   .icon {
  //     font-size 20px
  //   }
  // }
}
</style>
