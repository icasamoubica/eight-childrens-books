<template>
  <div class="home">
    <h3>8 Classic Childrens Books</h3>
      <div class="books">
        <Book   
            v-for='singleBook in books' 
            v-bind:key='singleBook.id'
            v-bind:book="singleBook"
        />
      </div>
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
  .books {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr;
  }

h3 {
    max-width: 70%;
    font-size: 1.2rem;
    margin: 0;
    text-align: left;
    margin-left: 1rem;
}
p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
    text-align: left;
}

</style>