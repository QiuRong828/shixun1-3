<template>
  <div>
    <el-card>
      菜单名称
      <el-input placeholder="请输入菜单名称" style="width: 125px"></el-input>
      菜单状态
      <el-select style="width: 115px">
        <el-option label="正常" value="1" />
        <el-option label="停用" value="2" />
      </el-select>
      <el-button type="primary"> 查询</el-button>
      <el-button type="info">重置</el-button>
    </el-card>

    <el-card>
      <el-button type="primary"> 新增</el-button>
      <el-table
        :data="tableData"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        default-expand-all
      >
        <el-table-column prop="date" label="date" sortable width="180" />
        <el-table-column prop="name" label="Name" sortable width="180" />
      </el-table>
    </el-card>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.el-card {
  margin-bottom: 10px;
}
</style>
