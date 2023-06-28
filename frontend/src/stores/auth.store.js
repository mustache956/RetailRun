import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({ actualUser: null, token: null}),
  getters: {
      getUser(state){
        return state.actualUser;
      },
    isLoggedIn(state){
        return !! state.token;
    }
  },
  actions: {
    setToken(token){
      this.token = token;
    },
    setUser(user){
      this.actualUser = user;
    },
    logOut(){
      this.token = null;
      this.user = null;
    }
  },
})

export const productStored = defineStore('product', {
  state: () => ({ product: null, token: null}),
  getters: {
      getProduct(state){
        return state.product;
      }
  },
  actions: {
    setProduct(product){
      this.product = product;
    }
  },
})

