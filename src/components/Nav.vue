<template>
  <aside class="nav">
    <ElRadioGroup v-model="isCollapse" style="margin-bottom: 20px">
      <ElRadioButton :label="false">expand</ElRadioButton>
      <ElRadioButton :label="true">collapse</ElRadioButton>
    </ElRadioGroup>

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>

    <!-- <ul class="nav-list">
      <li
        class="nav-item flex-center"
        v-for="(nav, index) in navList"
        :key="index"
        :class="{ active: nav.isActive }"
        @click="navClick(nav)"
      >
        {{ nav.name }}
      </li>
    </ul> -->
  </aside>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

// import * as ElIconModules from '@element-plus/icons-vue'
import { NavItem } from '../common/types'

export default defineComponent({
  name: 'Nav',
  components: {
    Document,
    IconMenu,
    Location,
    Setting
  },

  setup() {
    const router = useRouter()

    const reactiveData = reactive({
      isCollapse: false,
      navList: [
        {
          name: 'Home',
          isActive: false,
          path: '/'
        },
        {
          name: 'Vuex',
          isActive: false,
          path: '/vuex'
        },
        {
          name: 'Axios',
          isActive: false,
          path: '/axios'
        },
        {
          name: 'Test',
          isActive: false,
          path: '/test'
        }
      ],

      navClick(e: NavItem) {
        router.push(e.path)
      },
      handleOpen(key: string, keyPath: string[]) {
        console.log(key, keyPath)
      },
      handleClose(key: string, keyPath: string[]) {
        console.log(key, keyPath)
      }
    })

    const changeNavActive = (currentPath: string) => {
      reactiveData.navList.forEach((v: NavItem) => {
        const temp = v
        temp.isActive = temp.path === currentPath
        return temp
      })
    }

    watch(
      () => router.currentRoute.value,
      (_n) => {
        changeNavActive(_n.path)
      }
    )

    onMounted(() => {
      router.isReady().then(() => {
        changeNavActive(router.currentRoute.value.path)
      })
    })

    return {
      ...toRefs(reactiveData)
    }
  }
})
</script>

<style scoped lang="stylus">

@import "../style/basic.styl"

.nav {
  position relative
  // width 100%
  height 100%
  box-sizing border-box
  background: #fff

  .nav-list {

    .nav-item {
      box-sizing border-box
      // width 100%
      padding 0 10px
      height 60px
      line-height 60px
      cursor pointer
      // display inline-block

      &.active {
        font-weight bold
        background $second-background-color
      }

    }

  }

}
</style>
