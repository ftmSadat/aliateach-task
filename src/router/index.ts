import { createRouter, createWebHistory } from 'vue-router'

const signIn = () => import('@/pages/SignIn.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign-in',
      name: 'sign-in',
      component: signIn
    }
  ]
})

router.beforeEach((to, _, next) => {
  if (to.name !== 'sign-in' && localStorage.getItem('userToken') == null) {
    next({
      path: '/sign-in',
      params: { nextUrl: to.fullPath }
    })
  }

  next()
})

export default router
