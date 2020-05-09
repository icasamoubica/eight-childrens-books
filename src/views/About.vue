<template>
    <div class="aboutView">
        <div id="nav">
            <router-link class="goHome" to="/"><svg width="36" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g style="mix-blend-mode:darken">
                                                    <path d="M3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303L8.24264 17.3033C8.53553 17.5962 9.01041 17.5962 9.3033 17.3033C9.59619 17.0104 9.59619 16.5355 9.3033 16.2426L5.06066 12L9.3033 7.75736C9.59619 7.46447 9.59619 6.98959 9.3033 6.6967C9.01041 6.40381 8.53553 6.40381 8.24264 6.6967L3.46967 11.4697ZM22 11.25L4 11.25L4 12.75L22 12.75L22 11.25Z" fill="black"/>
                                                    </g>
                                                    <g style="mix-blend-mode:darken">
                                                    <circle cx="12" cy="12" r="12" fill="#C4C4C4"/>
                                                    </g>
                                                </svg>


            </router-link>
        </div>
        <div class="about" v-bind:style="{ padding : '0 8rem 0 8rem'}">
        <Book v-bind:book="getBook"
              v-bind:style="{ width : '26rem', 
                              height : '30rem',
                              color: 'black' }"/>
        <About v-bind:book="getBook"
               v-bind:style="{ width : '26rem', 
                              height : '30rem'}"/>
        </div>
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

<style lang="scss">
.about {
    max-width: 52rem;
    background-color: rgb(32, 29, 29);
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: rgb(168, 168, 168);
    line-height: 1.36rem;
}

body {
    background-color: rgb(32, 29, 29);
}
@media screen and (max-width: 1100px) {
    .about {
        grid-template-columns: 1fr;
    }
}

// home button
#nav {
  padding-top: 3rem;
  padding-left: 7rem;
  display: flex;
  justify-content: left;
  margin: 2rem;

  .goHome {
    color: black;
    font-size: 2rem;
    background-color: rgba(255,255,255,0.5);
    border-radius: 50%;    
  }
}
h3 {
    max-width: 70%;
    font-size: 1.6rem;
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