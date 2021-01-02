import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "lms" */ '../layouts/Lms.vue'),
    children : [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "lms_home" */ '../views/Home.vue')
      },
      {
        path: '/logout',
        name: 'logout',
        component: () => import(/* webpackChunkName: "logout" */ '../views/Logout.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
