// stores/counter.js

import { defineStore } from 'pinia'
import useFetch from '@/composables/useFetch'
import { useCookies } from 'vue3-cookies'
import type { RqError } from '@/types'

const { cookies } = useCookies()

export const useAuthStore = defineStore('auth', {
  actions: {
    async signIn(email: string, password: string) {
      try {
        const result = await useFetch('main/main/signup', 'POST', null, {
          email,
          password
        })

        console.log(result)
        cookies.set('access-token', 'test value ')
        
        return {
          status: true
        }
      
    } catch (err: RqError) {
        return {
          status: false,
          msg: err.error.details
        }
      }
    }
  }
})
