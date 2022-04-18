<template>
  <aside class="navWrap">
    <div class="navInner">
      <div class="navHend">左侧标题</div>
      <div class="handShank" @click="isCollapse = !isCollapse">
        <span v-show="isCollapse">
          <el-icon><DArrowRight /></el-icon>
        </span>

        <span v-show="!isCollapse">
          <el-icon><DArrowLeft /></el-icon>
        </span>
      </div>

      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <!-- 是否含有二级菜单 -->
        <div v-for="(level1, i1) in menuData" :key="i1">
          <el-sub-menu
            v-if="level1.children && level1.children.length"
            :index="`${i1}`"
          >
            <template #title>
              <el-icon><location /></el-icon>
              <span>{{ level1.title }}</span>
            </template>

            <!-- 是否含有三级菜单 -->
            <div v-for="(level2, i2) in level1.children" :key="i1 + i2">
              <el-sub-menu
                v-if="level2.children && level2.children.length"
                :index="`${i1}-${i2}`"
              >
                <template #title>
                  <span>{{ level2.title }}</span>
                </template>
                <el-menu-item
                  v-for="(level3, i3) in level2.children"
                  :key="i3"
                  :index="`${i1}-${i2}-${i3}`"
                  @click="navClick(level3)"
                >
                  {{ level3.title }}
                </el-menu-item>
              </el-sub-menu>

              <el-menu-item-group v-else>
                <el-menu-item :key="`${i1}-${i2}`" @click="navClick(level2)">
                  {{ level2.title }}
                </el-menu-item>
              </el-menu-item-group>
            </div>
          </el-sub-menu>
          <el-menu-item v-else @click="navClick(level1)" :index="`${i1}`">
            <el-icon><location /></el-icon>
            <template #title>{{ level1.title }}</template>
          </el-menu-item>
        </div>
      </el-menu>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
  // Document,
  // Menu as IconMenu,
  Location,
  // Setting,
  DArrowRight,
  DArrowLeft
} from '@element-plus/icons-vue'

// import * as ElIconModules from '@element-plus/icons-vue'
import { NavItem } from '../common/types'
import menuData from '@/common/data/menu.json'

export default defineComponent({
  name: 'Nav',
  components: {
    // Document,
    // IconMenu,
    Location,
    // Setting,
    DArrowRight,
    DArrowLeft
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
        console.log('navClick e~', e)
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
      menuData,
      ...toRefs(reactiveData)
    }
  }
})
</script>

<style scoped lang="stylus">

@import "../style/basic.styl"

.navWrap {
  position relative
  z-index 2
  padding: 0 0 10px 10px
  box-sizing border-box
  height 100%

  .navInner{
    height 100%
    background #fff
    border-radius: 3px
  }

  .el-menu-vertical-demo{
    /deep/>.el-sub-menu{
      >.el-sub-menu__title{
        padding-right 30px
        .el-sub-menu__icon-arrow{
          right 15px
        }
      }
      &.is-opened{
        >.el-sub-menu__title{
          padding-right 0
        }
      }
      .el-menu-item{
        min-width: 185px;
      }
    }
  }

  .navHend{
    height 50px
    line-height 50px
    text-align center
  }
  .handShank{
    position absolute
    top 0
    right: -20px;
    padding-right 3px
    border: 1px solid #e2e2e2;
    border-left 0 none
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    background: #fff;
    cursor pointer

    &:hover{
      border: 1px solid #ccc;
      border-left 0 none
    }

    span{
      padding-top 6px
      display block
    }
  }

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
