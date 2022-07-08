import Layout from '../../Layout'

export default {
  path: '/audit',
  name: 'approve-query',
  meta: {
    title: '审批管理',
    icon: 'el-icon-s-promotion'
  },
  component: Layout,
  children: [
    {
      path: '/audit/approve',
      component: () => import('../../views/approve'),
      meta: {
        title: '待审批'
      }
    }
  ]
}
