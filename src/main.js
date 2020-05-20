import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Book from './assets/childrensbooks.json'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // Shared stated between components
  data(){return{
    books: Book.books
  }},

  methods:{
    getBook(id){
      return this.books.find(book => book.id == id)
    }
  },

  router,
  store,
  render: h => h(App)
}).$mount('#app')
