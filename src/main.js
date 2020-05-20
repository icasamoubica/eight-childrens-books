import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Book from './assets/childrensbooks.json'
import store from './store'

Vue.config.productionTip = false

new Vue({

  router,
  store,
  render: h => h(App)
}).$mount('#app')
