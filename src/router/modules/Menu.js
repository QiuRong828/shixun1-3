import Layout from '../../Layout'

export default {
  path: '/system',
  name: 'system',
  meta: {
    title: '系统管理',
    icon: 'el-icon-setting'
  },
  component: Layout,
  children: [
    {
      path: '/system/menu',
      component: () => import('../../views/menu'),
      meta: {
        title: '菜单管理'
      }
    }
  ]
}
