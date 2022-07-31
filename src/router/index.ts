import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: {
        name: 'HomeView',
      },
      children: [
        {
          path: '/home',
          name: 'HomeView',
          component: HomeView,
        },
      ],
    },
  ],
})

export default router
