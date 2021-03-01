import { createRouter, createWebHashHistory } from 'vue-router'
import { asyncRoutes } from '@/config/router.config'

const router = createRouter({
  history: createWebHashHistory(),
  routes: asyncRoutes
})

export default router
