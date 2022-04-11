import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import Index from '@/views/home/index.vue'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
