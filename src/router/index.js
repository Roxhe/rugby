import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ex1',
      name: 'ex1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Ex1.vue')
    },
    {
      path: '/ex2',
      name: 'ex2',
      component: () => import('../views/Ex2.vue')
    },
    {
      path: '/ex3',
      name: 'ex3',
      component: () => import('../views/Ex3.vue')
    },
    {
      path: '/ex4',
      name: 'ex4',
      component: () => import('../views/Ex4.vue')
    },
    {
      path: '/ex5',
      name: 'ex5',
      component: () => import('../views/Ex5.vue')
    },
    {
      path: '/ex6',
      name: 'ex6',
      component: () => import('../views/Ex6.vue')
    },
    {
      path: '/ex7',
      name: 'ex7',
      component: () => import('../views/Ex7.vue')
    },
    {
      path: '/ex8',
      name: 'ex8',
      component: () => import('../views/Ex8.vue')
    },
    {
      path: '/MonProjet',
      name: 'MonProjet',
      component: () => import('../views/MonProjet.vue')
    },
  ]
})

export default router
