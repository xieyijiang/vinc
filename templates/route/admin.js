export const adminRoutes = [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/components/admin/Layout.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import('@/components/admin/Home.vue'),
        meta: {
          title: '首页',
        }
      },
      {
        path: 'user',
        name: 'AdminUser',
        component: () => import('@/components/admin/User.vue'),
        meta: {
          title: '用户',
        }
      }
    ]
  },
]