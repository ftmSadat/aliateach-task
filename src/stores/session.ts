import { defineStore } from 'pinia'
import useFetch from '@/composables/useFetch'
import { useCookies } from 'vue3-cookies'
import type { RqErrorType } from '@/types'

const { cookies } = useCookies()

export const useSessionStore = defineStore('session', {
  state: () => ({
    token: '',
    refresh: ''
  }),

  getters: {
    hasToken: (state) => !!state.token
  },

  actions: {
    async refreshToken() {
      try {
        const result = await useFetch('main/main/refresh', 'POST', null, {
          token: this.token
        })

        if (!result.ok) {
          this.removeAccessToken()
          this.removeRefreshToken()
          window.location.replace('/sing-in')
          return {
            status: false,
            msg: result.error.detail
          }
        }

        this.updateAccessToken(result.data.access)
        this.updateRefreshToken(result.data.refresh)

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
  },
  updateAccessToken(access: string) {
    cookies.set('access-token', access)
    this.token = access
  },
  updateRefreshToken(refresh: string) {
    // http-only
    cookies.set('refresh-token', refresh, undefined, undefined, undefined, true)
    this.refresh = refresh
  },
  removeAccessToken() {
    this.token = ''
    cookies.remove('access-token')
  },
  removeRefreshToken() {
    this.refresh = ''
    cookies.remove('refresh-token')
  }
})
