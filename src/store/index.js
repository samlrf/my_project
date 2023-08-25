import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({

  getters: {
    token (state) {
      return state.user.userInfo.token
    }
  },
  // 挂载到models里面 他们的js才能使用
  modules: {
    user,
    cart
  }
})
