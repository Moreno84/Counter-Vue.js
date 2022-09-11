import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0

  }), 
  actions: {
    increaseCount() {
      this.count++

    },
    decreaseCount() {
      this.count--   
    },
    resetCount() {
      this.count = 0
    }
  },
  getters:{
    oddOrEven: (state) =>{
      if(state.count % 2 === 0){
        return "Even"
      }else{
        return "Odd"
      }

    },

  }


})
