<template>
  <div id="app">
    <TheHeader></TheHeader>
    <TheMain></TheMain>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";


export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain
}
}
</script>

<style lang="scss">
@import "assets/scss/main.scss";
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-width: 1200px;
    max-width: 1800px;
    margin: auto;
  }
</style>
