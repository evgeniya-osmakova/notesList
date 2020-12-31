<template>
  <header class="header">Notes List</header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped lang="scss">

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $header-height;
    background: $color-blue;
    letter-spacing: 0.21em;
    line-height: 48px;
    text-transform: uppercase;
    box-shadow: 0 8px 7px rgba(0, 0, 0, 0.28);
    @include h1Text;
    color: $color-white;

    @media (max-width: 400px) {
      font-size: 40px;
    }
  }
</style>
