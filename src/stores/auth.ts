import { defineStore } from 'pinia'
import useFetch from '@/composables/useFetch'
import { useCookies } from 'vue3-cookies'
import type { RqErrorType } from '@/types'

const { cookies } = useCookies()

export const useAuthStore = defineStore('auth', {
  actions: {
    async signIn(email: string, password: string) {
      try {
        const result = await useFetch('main/main/signup', 'POST', null, {
          email,
          password
        })

        if (!result.ok)
          return {
            status: false,
            msg: result.error.detail
          }

        cookies.set('access-token', result.data.access)
        // http-only
        cookies.set('refresh-token', result.data.refresh, undefined, undefined, undefined, true)

        return {
          status: true
        }
      } catch (err: RqErrorType) {
        return {
          status: false,
          msg: err.error.detail
        }
      }
    }
  }
})
