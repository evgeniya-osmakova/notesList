<template>
  <div class="note-item">
    <button @click="onBackClick" class="note-item__link">Back to notes list</button>
    <div class="note-item__titel">Please enter the data:</div>
    <form class="form" @submit="checkForm($event)">

      <p class="form__row">
        <label class="form__label" for="title">Title</label>
        <input
            id="title"
            v-model="title"
            type="text"
            name="title"
            class="form__input"
        >
      </p>

      <p class="form__row">
        <label class="form__label" for="description">Description</label>
        <textarea
            id="description"
            v-model="description"
            name="description"
            class="form__textarea"
        ></textarea>
      </p>

      <p>
        <input class="button" type="submit" value="Add">
      </p>

      <div v-if="loadingState === 'failed'" class="note-item__error">
        Loading Error
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import loader from '../assets/img/loader.gif';

export default {
  name: 'NoteItem',
  data() {
    return {
      title: null,
      description: null,
      loader,
    };
  },
  computed: {
    ...mapGetters([
      'LOADING_STATE',
    ]),
    loadingState() {
      return this.LOADING_STATE;
    },
  },
  methods: {
    ...mapActions([
      'CLEAR_DATA',
      'ADD_NOTE',
    ]),
    onBackClick() {
      this.CLEAR_DATA();
      this.$router.push({ name: 'NotesList' });
    },
    async checkForm(e) {
      e.preventDefault();
      this.CLEAR_DATA();
      await this.ADD_NOTE({ title: this.title, description: this.description });
      if (this.loadingState === 'finished') {
        this.CLEAR_DATA();
        this.$router.push({ name: 'NotesList' });
      }
    },
  },
};
</script>

<style scoped lang="scss">
  .note-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;

    &__error {
      color: $color-light-red;
      @include h3Text;
      text-align: center;
    }

    &__titel {
      padding-top: 20px;
      @include h2Text;
      text-align: center;
      color: $color-light-black;
    }

    &__link {
      text-align: left;
      text-decoration: underline;
      cursor: pointer;
      @include h3Text;
      color: $color-blue;
      margin-top: 50px;
      margin-bottom: 10px;
      background: transparent;
      border: none;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  .form {
    max-width: 700px;
    width: 80%;
    margin: 50px 30px;
    border-radius: 50px;

    &__label {
      @include h3Text;
      margin-bottom: 0.5rem;
    }

    &__input {
      border: 1px solid #AAAAAA;
      padding: 0.5rem 1rem;
      height: 40px;
      @include bodyText;

      &:focus {
        outline: none;
      }
    }

    &__textarea {
      height: 140px;
      resize: none;
      border: 1px solid #AAAAAA;
      @include bodyText;

      &:focus {
        outline: none;
      }
    }

    &__row {
      display: flex;
      flex-direction: column;
      margin-bottom: 1.5rem;
    }
  }

  .button {
    color: $color-white;
    width: 100%;
    font-size: 25px;
    background: $color-blue;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    padding: 0.7rem 1.2rem;
    margin-top: 0.8rem;

    &:hover {
      background: rgba($color-blue, 0.8);
    }

    &:focus {
      outline: none;
    }
  }

</style>
