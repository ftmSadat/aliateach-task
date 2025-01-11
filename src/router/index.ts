import { createRouter, createWebHistory } from 'vue-router'
import { useCookies } from 'vue3-cookies'

const home = () => import('@/pages/home.vue')
const signIn = () => import('@/pages/signIn.vue')

const { cookies } = useCookies()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: signIn
    }
  ]
})

router.beforeEach((to, _, next) => {
  if (to.name === 'sign-in' || cookies.get('access-token') !== null) next()

  next({
    path: '/sign-in',
    params: { nextUrl: to.fullPath }
  })
})

export default router
