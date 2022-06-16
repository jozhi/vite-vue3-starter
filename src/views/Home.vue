<template>
  <div class="appManagePage">
    <div class="titlePart cf">
      <el-input
        class="elInput"
        size="small"
        v-model="listParams.name"
        placeholder="请输入应用名"
      ></el-input>
      <el-input
        class="elInput"
        size="small"
        v-model="listParams.groupName"
        placeholder="请输入团队名"
      ></el-input>
      <el-select
        v-model="listParams.status"
        size="small"
        class="elSelect"
        clearable
        placeholder="请选择发布状态"
      >
        <el-option label="已发布" value="IS_PUBLIC"> </el-option>
        <el-option label="未发布" value="NO_PUBLIC"> </el-option>
        <el-option label="已删除" value="IS_DELETE"> </el-option>
      </el-select>

      <span class="searchBox">
        <el-button size="small" type="primary" @click="queryList">查询</el-button>
        <el-button size="small" type="primary" @click="dialogVisible = true"
          >新增应用</el-button
        >
      </span>
    </div>

    <div class="contPart">
      <div
        v-for="op in itemPart"
        :key="op.id"
        class="itemPart"
        @click="itemPartClick(op.id)"
      >
        <div class="tool_box">
          <a
            href="javascript:;"
            v-if="op.status === 'NO_PUBLIC'"
            @click.stop="itemRelease(op, 'IS_PUBLIC')"
            >发布</a
          >
          <a
            href="javascript:;"
            v-if="op.status === 'IS_PUBLIC'"
            @click.stop="itemRelease(op, 'NO_PUBLIC')"
            >取消发布</a
          >
          <!-- <a href="javascript:;" @click.stop="itemDel(op)">删除</a> -->
        </div>
        <div class="h2">
          <i class="el-icon-menu"></i>
          <p>{{ op.name }}</p>
        </div>
        <div class="info">
          <div class="releaseStatus">
            <span v-if="op.status === 'IS_DELETE'" class="public">已删除</span>
            <span v-if="op.status === 'NO_PUBLIC'">未发布</span>
            <span v-if="op.status === 'IS_PUBLIC'">已发布</span>
          </div>
          <span class="name"><i class="el-icon-s-custom"></i> {{ op.groupName }}</span>
          <!-- <span class="edit_info"><i class="el-icon-time"></i> 最近修改时间 {{op.modifyTime | TimeFilter}}</span> -->
        </div>
      </div>
    </div>

    <el-dialog title="应用基本信息" v-model="dialogVisible" width="600px">
      <div class="appBasicInfo">
        <el-form :model="createForm" ref="appBasicInfo" label-width="100px">
          <el-form-item label="应用名称" prop="name">
            <el-input v-model="createForm.name"></el-input>
          </el-form-item>
          <el-form-item label="团队名称" prop="groupName">
            <el-input v-model="createForm.groupName"></el-input>
          </el-form-item>
          <!-- <el-form-item label="应用图标" prop="iconKey">
            <input id="file" type="file" @change="fileChange" />
          </el-form-item> -->
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="formSave">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import axios from '../utils/axios'

export default defineComponent({
  name: 'AppManage',
  setup() {
    const router = useRouter()

    const reactiveData = reactive({
      input: '',
      itemPart: [],

      listParams: {
        name: '',
        groupName: '',
        status: ''
      },
      listPage: {
        pageNum: '1', // 当前页码
        pageSize: '10' // 每页数据数
      },
      createForm: {
        name: '',
        groupName: ''
        // iconKey:'',  // 图标上传
      },
      dialogVisible: false
    })

    const queryList = () => {
      const params: { [key: string]: string } = {
        ...reactiveData.listParams,
        ...reactiveData.listPage
      }

      Object.keys(params).forEach((key) => {
        if (params[key]) {
          delete params[key]
        }
      })
      // type T = keyof typeof params
      // for (const op in params) {
      //   !params[op] && delete params[op]
      // }

      axios.post('/application/list', params).then((res) => {
        if (res.data.success) {
          reactiveData.itemPart = res.data.result.dataList
        }
      })
    }

    const formSave = () => {
      axios.post('/application/save', reactiveData.createForm).then((data) => {
        console.log(data)
      })
    }

    const itemPartClick = (id: Number) => {
      router.push(`/AppDetails?appid=${id}`)
    }

    const itemRelease = (op: any, status: string) => {
      /* eslint no-param-reassign: ["error", { "props": false }] */

      // TODO 应用发布接口待联调~无接口
      axios.post('/application/applyForm', { id: op.id, status }).then((res) => {
        if (res.data.success) {
          ElMessage.success(res.data.resultDes)
          op.status = status
        } else {
          ElMessage.error(res.data.resultDes)
        }
      })
    }

    queryList()

    onMounted(() => {})
    onUnmounted(() => {})
    return {
      ...toRefs(reactiveData),
      formSave,
      itemPartClick,
      itemRelease,
      queryList
    }
  }
})
</script>

<style scoped lang="stylus">
// .appManagePage{}
.titlePart {
  padding-bottom: 12px;
  margin-bottom: 20px;
  border-bottom: 1px solid #d2d2d2;

  .elInput{ width: 150px; margin-right: 10px;}
  .elSelect{ width: 150px; }
  .searchBox {
    width: 200px;
    float: right;
    text-align: right;
  }
}
.contPart {
  margin-bottom: 10px;
  .itemPart {
    position: relative;
    float: left;
    margin-right: 20px;
    margin-bottom: 20px;
    width: 205px;
    height: 170px;
    border: 1px solid #d2d2d2;
    cursor: pointer;

    .tool_box {
      display: none;
      position: absolute;
      top: 3px;
      right: 0;
      a {
        border-radius: 3px;
        margin-right: 5px;
        display: inline-block;
        color: #fff;
        border: 1px solid #eee;
        line-height: 1;
        padding: 3px;
      }
    }

    &:hover{
      .tool_box{ display: block; }
      background-color: #fefefe;
      box-shadow: 1px 1px 15px #e2e2e2;
    }
    .h2 {
      height: 140px;
      font-size: 20px;
      color: #fff;
      text-align: center;
      background-color: #575878;
      i{
        margin-top: 20px;
        font-size: 60px;
      }
    }
    .info {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      color: #aaa;
      padding: 0 5px;
      height: 30px;
      line-height: 30px;
      .name { margin-right: 20px; }

      .releaseStatus{
        float: right;
        span{
          border-radius: 3px;
          padding: 2px 3px;
          display: inline-block;
          border: 1px solid #444;
          line-height: 1.2;
          font-size: 12px;
          &.public{
            border: 1px solid #1890FF;
            color: #1890FF;
          }
        }
      }
    }
  }
}
</style>
