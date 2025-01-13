import { defineStore } from 'pinia'
import useFetch from '@/composables/useFetch'
import type { RqErrorType } from '@/types'

export const useFormStore = defineStore('form', {
  state: () => ({
    form: []
  }),
  getters: {
    hasForm(state) {
      return state.form.length !== 0
    }
  },
  actions: {
    async getForms(from: number = 1, to: number = 15) {
      try {
        const result = await useFetch(`main/main/forms?page=${from}&per_page=${to}`, 'GET')

        if (!result.ok)
          return {
            status: false,
            msg: result.error.details
          }

        console.log('kdj')

        return {
          status: true
        }
      } catch (err: RqErrorType) {
        return {
          status: false,
          msg: err.error.details
        }
      }
    },

    async getForm(id: string) {
      try {
        const result = await useFetch(`main/main/form?form_id=${id}`, 'GET')

        if (!result.ok)
          return {
            status: false,
            msg: result.error.details
          }

        console.log('kdj')

        return {
          status: true
        }
      } catch (err: RqErrorType) {
        return {
          status: false,
          msg: err.error.details
        }
      }
    }
  }
})
