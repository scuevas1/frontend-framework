import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Recipes from '../pages/Recipes.vue'
import About from '../pages/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/recipes', name: 'Recipes', component: Recipes },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
