import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import Parent from '../views/Parent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Parent,
    },
    {
      path: '/about',
      name: 'about',
      component: ProductList,
    },
  ],
})

export default router
