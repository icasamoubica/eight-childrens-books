<template>
  <div class="home">
    <Book   
        v-for='singleBook in books' 
        v-bind:key='singleBook.id'
        v-bind:book="singleBook"
        v-on:bookChosen="bookChosen"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Books from '@/assets/childrensbooks.json'
import Book from '@/components/book.vue'

export default {
  data() {
    return {
      books: Books.books
    }
  },
  methods: {
    bookChosen() {
      
    }
  },
  name: 'Home',
  components: {
    Book
  }
}
</script>
