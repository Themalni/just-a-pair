import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({ storage: localStorage })

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [vuexLocalStorage.plugin]
})
