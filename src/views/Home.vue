<template>
  <div class="home">
      <Book   
          v-for='singleBook in books' 
          v-bind:key='singleBook.id'
          v-bind:book="singleBook"
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
  name: 'Home',
  components: {
    Book
  }
}
</script>
<style>
  .home {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
  }
  
</style>