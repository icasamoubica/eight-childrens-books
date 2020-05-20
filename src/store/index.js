import Vue from 'vue'
import Vuex from 'vuex'
import Books from '@/assets/childrensbooks.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books : Books.books
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
