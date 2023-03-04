import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuNegociosVue from '@/views/MenuNegocios.vue'
import MenuPagosVue from '@/views/MenuPagos.vue'
import MenuPapelVue from '@/views/MenuPapel.vue'
import MenuPecVue from '@/views/MenuPec.vue'
import MenuPeelVue from '@/views/MenuPeel.vue'

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

    path: '/menuPagos',
    name: 'MenuPagos',
    component: MenuPagosVue

  },{

    path: '/menuPapel',
    name: 'MenuPapel',
    component: MenuPapelVue

  },{

    path: '/menuPec',
    name: 'MenuPec',
    component: MenuPecVue

  },{

    path: '/menuPeel',
    name: 'MenuPeel',
    component: MenuPeelVue

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
