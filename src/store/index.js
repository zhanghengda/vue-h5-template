import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recruitScrollY: 0
  },
  modules: {
    app
  },
  getters,
  mutations: {
    changeRecruitScrollY(state, recruitScrollY) {
      state.recruitScrollY = recruitScrollY
    }
  }
})

export default store
