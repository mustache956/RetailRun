import { createRouter, createWebHistory } from 'vue-router'

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
      path: '/map',
      name: 'Map',
      component: () => import('../views/MapView.vue'),
      props: true
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
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ForgotPasswordView.vue')
    },
  ]
})

export default router
