

<template>
   <router-link class="book" 
                v-bind:to="'/about/' + book.id" 
                v-bind:style="{'background-color':book.color}">
        <div class="spine"></div>
        <div class="horizontalLine" v-bind:style="{'background-color': 'rgba(0,0,0,0.5)'}"></div>
        <div class="frontside">
            <h3>{{book.title}}</h3>
            <p>{{book.author}}</p>
        </div>
   </router-link>
</template>

<script>
export default {
    props: {
        book: Object
    }
}
</script>

<style lnag="scss">

.book {
    border-radius: 3px;
    color: whitesmoke;
    margin: 15px;
    display: grid;
    grid-template-columns: 5% 1.5% auto;
    background-color: rgb(43, 20, 20);
    height: 18rem;
    width: 15rem;
}
.book:hover, .book:visited, .book:link, .book:active
{
    text-decoration: none;
}
.spine, .frontside {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
</style>