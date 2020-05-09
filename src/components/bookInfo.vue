<template>
    <div class="details">
        <div class="titleAndAuthor">
            <h3>{{book.title}}</h3>
            <p>{{book.author}}</p>
        </div>
        <div class="description">
            <p>{{book.plot}}</p>
        </div>
        <div class="info">
            <p>{{book.audience}}</p>
            <p>{{book.year}}</p>
            <p>{{book.pages}}</p>
            <p>{{book.publisher}}</p>
        </div>
        <button class="getIt">Oh, I want to read it!</button>
    </div>
</template>

<script>
export default {
    props: {
        
        book: Object
    }
}
</script>
    
<style>
.details {
    display: grid;
}
template {
    height: 40rem;
    width: 30rem;
}
</style>