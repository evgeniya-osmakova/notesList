<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>

import Header from './components/elements/Header.vue';

export default {
  name: 'App',
  components: { Header },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Roboto', sans-serif;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
}

</style>
