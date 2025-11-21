import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Recipes from '../pages/Recipes.vue'
import About from '../pages/About.vue'

import HuevosConChorizo from '../pages/recipes/HuevosConChorizo.vue'
import ArepasConQueso from '../pages/recipes/ArepasConQueso.vue'
import BananaBread from '../pages/recipes/BananaBread.vue'
import LavaCake from '../pages/recipes/LavaCake.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/recipes', name: 'Recipes', component: Recipes },
  { path: '/recipes/huevos-con-chorizo', name: 'HuevosConChorizo', component: HuevosConChorizo },
  { path: '/recipes/arepas-con-queso', name: 'ArepasConQueso', component: ArepasConQueso },
  { path: '/recipes/banana-bread', name: 'BananaBread', component: BananaBread },
  { path: '/recipes/lava-cake', name: 'LavaCake', component: LavaCake },
  { path: '/recipes/carrot-cake', name: 'CarrotCake', component: CarrotCake },
  { path: '/recipes/cajun-pasta', name: 'CajunPasta', component: CajunPasta },
  { path: '/about', name: 'About', component: About },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
