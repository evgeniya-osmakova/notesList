<template>
  <div class="note">
    <div class="note__background">
      <button @click="deleteNote" class="note__btn" title="delete">X</button>
      <div class="note__text">
        <div class="note__date--main">
          {{ note_data.date | moment("MMM Do YY") }}
        </div>
        <div class="note__date--past">
          {{ note_data.date | moment("from", "now", true) }} ago
        </div>
        <div class="note__title">
          {{ note_data.title }}
        </div>
        <div class="note__description">
          {{ note_data.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Note',
  components: {},
  props: {
    note_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapActions([
      'GET_NOTES',
      'CLEAR_DATA',
      'DELETE_NOTE',
    ]),
    async deleteNote() {
      await this.DELETE_NOTE(this.note_data.id);
      this.CLEAR_DATA();
      this.GET_NOTES();
    },
  },
};
</script>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css?family=Dancing+Script');

.note {
  width: 260px;
  height: 100%;
  position: relative;
  margin: 20px 10px;
  padding: 20px;
  background-color: pink;
  box-shadow: 0 0 5px 0 #888;

  &__background {
    height: 100%;
    background-image: repeating-linear-gradient(pink 0px, pink 24px, black 25px);
  }

  &__btn {
    margin-left: 260px;
    border: none;
    background: transparent;
    cursor: pointer;
    color: white;
    font-weight: 700;

    &:focus {
      outline: none;
    }

    &:active {
      border: 1px solid transparent;
    }

    &:hover {
      color: grey;
    }
  }

  &__text {
    padding-top: 5px;
    padding-right: 16px;
    line-height: 25px;
    font-family: 'Dancing Script', cursive;
    font-size: 19px;
    letter-spacing: 1px;
    word-spacing: 5px;
  }

  &__date {

    &--main {
      padding-left: 10px;
    }

    &--past {
      padding-bottom: 27px;
      padding-left: 10px;
    }
  }

  &__title {
    padding-left: 20px;
    font-size: 25px;
    font-weight: 700;
    padding-bottom: 3px;
  }

  &__description {
    padding-left: 10px;
  }
}
</style>
