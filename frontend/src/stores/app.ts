// Utilities
import axios from 'axios'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    loading: false,
  }),
  actions: {
    async initDownload (): Promise<void> {
      try {
        this.loading = true
        const url = new URL('/api/candidate/list', window.origin)
        const { data } = await axios.get(url.toString())
        console.log(data)
        // todo: call an API
      } catch (error) {
        console.error(error)
        // todo: handle
      } finally {
        this.loading = false
      }
    },
  },
})
