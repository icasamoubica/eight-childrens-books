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
            <p><em>Audience: </em>{{book.audience}}</p>
            <p><em>First poublished: </em>{{book.year}}</p>
            <p><em>Pages: </em>{{book.pages}}</p>
            <p><em>Publisher: </em>{{book.publisher}}</p>
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
    margin: 15px;
    display: grid;
    grid-template-rows: 20% auto 20%10%;
}

.titleAndAuthor > * {
    margin-left: 0;
    margin-top: 0.3rem;
}

.description p {
    margin: 0;
    margin-top: 1rem;
    line-height: 1.6;
}
em {
    font-style: normal;
    font-weight: 800;
}
.info {
    padding: 0.4rem;
    border-radius: 3px;
    background-color: rgba(255,255,255,0.07);
    max-height: 4.3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-bottom: 1.9rem;
}

.info p {
    margin: 0;
}

button {
    font-weight: 600;
    max-width: 12rem;
    max-height: 2.3rem;
    border-radius: 4px;
}




</style>