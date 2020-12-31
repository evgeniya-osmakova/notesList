<template>
  <section class="notFound">
    <div class="notFound__header notFound-header">
      <h2 class="notFound-header__title">Page not found</h2>
    </div>
    <img class="notFound__img" :src="notFound" alt="404"/>
    <router-link :to="{ name: 'NotesList' }" class="notFound__btn" >
      To the main page
    </router-link>
  </section>
</template>

<script>
import notFound from '../assets/img/404_page_not_found_ 1.svg';

export default {
  name: 'NotFound',
  data() {
    return {
      notFound,
    };
  },
};
</script>

<style scoped lang="scss">

.notFound {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - #{$header-height});

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-bottom: 10px;
    margin-right: 380px;

    @media (max-width: 850px) {
      margin-right: 100px;
    }

    @media (max-width: 450px) {
      margin-right: 0;
    }
  }

  &__img {
    padding-bottom: 50px;

    @media (max-width: 850px) {
      width: 400px;
    }

    @media (max-width: 450px) {
      width: 300px;
    }
  }

  &__btn {
    margin-bottom: 20px;
    width: 310px;
    @include h2Text;
    color: $color-blue;
  }
}

.notFound-header {
  &__title {
    @include h2Text;
    text-align: left;
  }
}

</style>
