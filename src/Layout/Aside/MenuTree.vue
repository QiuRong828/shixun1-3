<template>
  <div>
    <el-sub-menu :index="item.path">
      <template #title>
        <el-icon><setting /></el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <MenuTree
        v-for="child in item.children"
        :menu="child"
        :key="child"
      ></MenuTree>
    </el-sub-menu>
  </div>
</template>
<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  menu: {
    type: Object,
    default: () => {}
  }
})

const item = computed(() => {
  return props.menu
})
</script>
<style lang="scss" scoped></style>
