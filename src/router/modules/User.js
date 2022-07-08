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
      path: '/system/user',
      component: () => import('../../views/user'),
      meta: {
        title: '用户管理'
      }
    }
  ]
}
