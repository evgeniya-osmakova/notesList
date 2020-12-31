<template>
  <img :src="loader" class="loader" alt="Loading..">
</template>

<script>
import loader from '../../assets/img/loader.gif';

export default {
  name: 'Loader',
  data() {
    return {
      loader,
    };
  },
};
</script>

<style scoped>
  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
</style>
