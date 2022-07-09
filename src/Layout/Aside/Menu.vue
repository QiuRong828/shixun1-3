<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#001529"
    default-active="/index"
    text-color="#fff"
    router
  >
    <div class="box">
      <img
        src="http://manager.9yuecloud.com/img/logo.384b81fb.png"
        alt=""
        class="image"
      />
      <span>Manager </span>
    </div>
    <MenuTree v-for="item in menuList" :menu="item" :key="item"></MenuTree>
  </el-menu>
</template>
<script setup>
import MenuTree from './MenuTree.vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { filterMenuData } from '../../utils/menu'
import { filterRouters, generateMenus } from '../../utils/router'

const router = useRouter()
const menuList = computed(() => {
  const routes = filterRouters(router.getRoutes())
  return filterMenuData(generateMenus(routes))
})

console.log(menuList, 'menulist')
</script>
<style lang="scss" scoped>
.box {
  font-size: 25px;
  display: flex;
  align-items: center;
  color: white;
  .image {
    margin: 10px 20px;
    width: 32px;
    height: 32px;
  }
}
</style>
