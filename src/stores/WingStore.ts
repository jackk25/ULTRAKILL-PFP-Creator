import { defineStore } from 'pinia'

export const useWingStore = defineStore('WingStore', {
  state: () => {
    return {
      colors: [
        { id: 1, color: 'Black', active: true },
        { id: 2, color: 'Black', active: false },
        { id: 3, color: 'Black', active: false },
        { id: 4, color: 'Black', active: false },
        { id: 5, color: 'Black', active: false },
        { id: 6, color: 'Black', active: false },
        { id: 7, color: 'Black', active: false },
        { id: 8, color: 'Black', active: false }
      ],
      active: 1
    }
  }

  //actions

  //getters
})
