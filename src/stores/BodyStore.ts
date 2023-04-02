import { defineStore } from 'pinia'

export const useBodyStore = defineStore('BodyStore', {
  state: () => {
    return {
      bodyColor: '',
      emissionColor: '',
      pose: ''
    }
  }
})
