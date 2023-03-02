import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuNegociosVue from '@/views/MenuNegocios.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{

    path: '/menuNegocios',
    name: 'MenuNegocios',
    component: MenuNegociosVue

  },{    
    path: '/about',
    name: 'about',    
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
