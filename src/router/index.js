import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/counter1',
      name: 'counter1',
      component: () => import('../views/Counter1.vue')
    },
    {
      path: '/counter2',
      name: 'counter2',
      component: () => import('../views/Counter2.vue')
    }
  ]
})

export default router
