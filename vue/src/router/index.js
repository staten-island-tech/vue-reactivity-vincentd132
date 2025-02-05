import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue' // Import the ProductList component

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductList, // Map '/' path to the ProductList component
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'), // Lazy-loaded AboutView component
    },
  ],
})

export default router
