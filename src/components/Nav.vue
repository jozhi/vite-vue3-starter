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
        :default-active="defaultActive"
        class="el-menu-vertical"
        :collapse="isCollapse"
        @open="handleOpen"
        ref="elMenu"
      >
        <!-- 是否含有二级菜单 -->
        <div v-for="(level1, i1) in menuData" :key="`${i1}`">
          <!-- 无子级 -->
          <el-menu-item
            v-if="!level1.children || !level1.children.length"
            @click="navClick(level1)"
            :index="level1.name"
          >
            <el-icon><location /></el-icon>
            <template #title>{{ level1.title }}</template>
          </el-menu-item>
          <!-- 有子级 -->
          <el-sub-menu
            v-if="level1.children && level1.children.length"
            :index="level1.name"
          >
            <template #title>
              <el-icon><location /></el-icon>
              <span v-show="!isCollapse">{{ level1.title }}1</span>
            </template>

            <!-- 三级菜单判断 -->
            <template v-for="(level2, i2) in level1.children">
              <!-- 无子级 -->
              <el-menu-item-group
                v-if="!level2.children || !level2.children.length"
                :key="`${i1}-${i2}`"
              >
                <el-menu-item @click="navClick(level2)" :index="level2.name">
                  {{ level2.title }}
                </el-menu-item>
              </el-menu-item-group>

              <!-- 有子级 -->
              <el-sub-menu
                v-if="level2.children && level2.children.length"
                :index="level2.name"
                :key="`${i1}-${i2}`"
              >
                <template #title>
                  <span>{{ level2.title }}</span>
                </template>
                <el-menu-item
                  v-for="(level3, i3) in level2.children"
                  :key="`${i1}-${i2}-${i3}`"
                  :index="level3.name"
                  @click="navClick(level3)"
                >
                  {{ level3.title }}
                </el-menu-item>
              </el-sub-menu>
            </template>
          </el-sub-menu>
        </div>
      </el-menu>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue'
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
      defaultActive: 'Vuex',
      navClick(e: NavItem) {
        // console.log('navClick e~', e)
        router.push(e.path)
      },
      handleOpen(key: string, keyPath: string[]) {
        console.log(key, keyPath)
      }
    })

    const changeNavActive = (currentPath: string) => {
      // console.log('currentPath::', currentPath)
      reactiveData.defaultActive = currentPath.replaceAll('/', '')
    }

    watch(
      () => router.currentRoute.value,
      (_n) => {
        changeNavActive(_n.path)
      }
    )

    // onMounted(() => {
    //   router.isReady().then(() => {
    //     changeNavActive(router.currentRoute.value.path)
    //   })
    // })

    return {
      menuData,
      ...toRefs(reactiveData)
    }
  }
})
</script>

<style lang="stylus">
// 左侧栏折叠 bug 修复
.el-menu-vertical{
  /deep/>.el-sub-menu{
    &.el-menu--collapse{
      .el-sub-menu .el-sub-menu__icon-arrow{
        display none
      }
    }
  }
</style>

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


  .navHend{
    height 50px
    line-height 50px
    text-align center
    font-size 14px
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
}
</style>
