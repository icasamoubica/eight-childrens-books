<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
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
    font-size: 0.9rem;
    margin-left: 1rem;
    margin-bottom: 3rem;
    text-align: left;
}
</style>
