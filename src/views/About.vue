<template>
    <Book v-bind:book="getBook"/>
</template>

<script>
import Book from '@/components/book.vue'

export default {

    components: {
        Book
    },
    computed: {
        getBook() {
            return this.$root.getBook( this.$route.params.id )
        }
    }
    
}
</script>

<style>

</style>