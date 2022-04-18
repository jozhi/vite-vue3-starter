<template>
  <div class="vuex-container page-container">
    <div class="page-title">Vuex Test Page</div>
    <p>store Root is: {{ text }}</p>
    <p>store doubleCount is: {{ count }}</p>
    <el-button type="primary" @click="double">double</el-button>

    <ElTable :data="tableData" stripe style="width: 100%">
      <ElTableColumn prop="date" label="日期" width="180"> </ElTableColumn>
      <ElTableColumn prop="name" label="姓名" width="180"> </ElTableColumn>
      <ElTableColumn prop="address" label="地址"> </ElTableColumn>
    </ElTable>
    <ElPagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </ElPagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs } from 'vue'
// import { ElTable, ElTableColumn } from 'element-plus'
import { useStore } from '../store'

export default defineComponent({
  name: 'Vuex',

  setup() {
    const store = useStore()
    const reactiveData = reactive({
      text: computed(() => store.state.text),
      count: computed(() => store.state.numFactoryModule.count),
      handleSizeChange(val: number) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val: number) {
        console.log(`当前页: ${val}`)
      },
      currentPage: 0,
      total: 999
    })

    const double = () => {
      store.commit('numFactoryModule/DOUBLE_COUNT')
    }

    const tableData = [
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }
    ]

    return {
      ...toRefs(reactiveData),
      double,
      tableData
    }
  }
})
</script>

<style scoped lang="stylus"></style>
