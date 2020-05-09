<template>
    <div class="about" v-bind:style="{ padding : '0 8rem 0 8rem'}">
        <Book v-bind:book="getBook"
              v-bind:style="{ width : '30rem', 
                              height : '40rem'}"/>
        <About v-bind:book="getBook"/>
    </div>
</template>

<script>
import Book from '@/components/book.vue'
import About from '@/components/bookInfo.vue'
export default {
    components: {
        Book,
        About
    },
    computed: {
        getBook() {
            return this.$root.getBook( this.$route.params.id )
        }
    }
    
}
</script>

<style>
    .about {
        background-color: rgb(32, 29, 29);
        display: grid;
        grid-template-columns: 1fr 1fr;
        color: whitesmoke;
    }

    body {
        background-color: rgb(32, 29, 29);
    }
</style>