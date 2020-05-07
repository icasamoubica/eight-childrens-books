<template>
    <div v-on:click='chooseBook' class="book">
        <div class="spine"></div>
        <div class="frontside">
            <h3>{{book.title}}</h3>
            <p>{{book.author}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        book: Object
    },
    methods: {
        chooseBook() {
             this.$emit('bookChosen', this.book)
        }
    }
}
</script>

<style>
h3 {
    font-size: 1.7rem;
}
p {
    font-size: 0.8rem;
}
    .book {
        color: cornsilk;
        margin: 15px;
        display: grid;
        gap: 4px;
        grid-template-columns: 5% auto;
        background-color: rgb(43, 20, 20);
        height: 30em;
        width: 20em;
    }
    .spine, .frontside {
        background-color: chocolate;
    }
</style>