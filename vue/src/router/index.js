import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import App from '../views/Parent.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductList,
    },
    {
      path: '/about',
      name: 'about',
      component: App,
    },
  ],
})

export default router
