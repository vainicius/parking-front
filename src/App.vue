<template>
  
  <nav>
  
    <router-link to="/">Inicio</router-link> |
    <router-link to="/about">Cadastros</router-link> |
    <router-link to="/cadastros">Cadastros</router-link>  
    </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0a0a0a;
}
body{
  background-color: #ffffff;
}




nav {
  padding: 2rem;
  background-color: #42c58a;
  

  a {
    font-weight: bold;
    color: #000000;

    &.router-link-exact-active {
      color: #ffffff;
      
    }
  }
 
}


</style>
