import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import SignIn from '@/components/SignIn.vue'
import { adminRoutes } from './admin_routes'

const basicRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: false } // 需要用户登录时开启
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
]

const fullRoutes = [
  ...basicRoutes,
  ...adminRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes: fullRoutes,
})

// (可选) 路由守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      next({ path: '/signin' })
    } else {
      const isTokenValid = verifyToken(token)
      if (!isTokenValid) {
        next({ path: '/signin' })
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

function verifyToken(token) {
  // 这里添加你的 token 验证逻辑，例如发送请求到服务器验证 token
  return token.length > 100
}

export default router