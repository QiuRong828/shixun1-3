<template>
  <div>
    <el-card>
      菜单名称
      <el-input
        placeholder="请输入菜单名称"
        style="width: 125px"
        v-model="menuForm.menuName"
      ></el-input
      >&emsp; 菜单状态
      <el-select style="width: 115px" v-model="menuForm.menuState">
        <el-option label="正常" value="正常" />
        <el-option label="停用" value="停用" />
      </el-select>
      &emsp;
      <el-button type="primary"> 查询</el-button>
      <el-button type="info">重置</el-button>
    </el-card>

    <el-card>
      <el-button type="primary"> 新增</el-button>
      <el-table
        :data="menuList"
        style="width: 1270px; margin-top: 20px"
        row-key="id"
        border
        default-expand-all
      >
        <el-table-column prop="menuName" label="菜单名称" />
        <el-table-column prop="icon" label="图标" />
        <el-table-column
          prop="menuType"
          label="菜单类型"
          :formatter="stateFormat"
        />

        <el-table-column prop="menuCode" label="权限标志" />
        <el-table-column prop="path" label="路由地址" />
        <el-table-column prop="component" label="组件路径" />
        <el-table-column
          prop="menuState"
          label="菜单状态"
          :formatter="menustate"
        />
        <el-table-column prop="createTime" label="创建时间" />
        <el-table-column label="操作" />
      </el-table>
    </el-card>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import MenuApi from '../../api/menu'

const menuList = ref([])
const menuForm = reactive({
  menuName: '',
  menuState: ''
})

const getMenuData = async () => {
  const res = await MenuApi.getMenuList()
  console.log(res, 'menulist123')
  menuList.value = res
}
getMenuData()

const stateFormat = (row) => {
  if (row.menuType === 1) {
    return '菜单'
  } else if (row.menuType === 2) {
    return '按钮'
  }
}

const menustate = (row) => {
  if (row.menuState === 1) {
    return '正常'
  } else if (row.menuState === 2) {
    return '禁用'
  }
}
</script>
<style lang="scss" scoped>
.el-card {
  margin-bottom: 10px;
}
</style>
