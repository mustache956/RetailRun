import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
      /* component: HomeView, */
     // redirect: '/login'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/signalProblem',
      name: 'SignalProblem',
      component: () => import('../views/SignalProblemView.vue')
    },
    { 
      path: '/admin',
      name: 'AdminHome', 
      component: () => import('../views/Admin/AdminHome.vue')
    },
  ]
})

export default router
