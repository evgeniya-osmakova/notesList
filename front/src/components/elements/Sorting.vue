<template>
  <label @change="addSort" class="filter">
    {{text}}
    <input class="filter__checkbox" type="checkbox" :checked="type === sortType"/>
    <span class="filter__checkmark"> </span>
  </label>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Sorting',
  props: {
    text: {
      type: String,
      default() {
        return {};
      },
    },
    type: {
      type: String,
      default() {
        return {};
      },
    },
  },
  computed: {
    ...mapGetters([
      'SORT_TYPE',
    ]),
    sortType() {
      return this.SORT_TYPE;
    },
  },
  methods: {
    ...mapActions([
      'ADD_SORTING',
    ]),
    addSort() {
      this.ADD_SORTING(this.type);
    },
  },
};
</script>

<style scoped lang="scss">

  .filter {
    position: relative;
    display: block;
    margin-bottom: 3px;
    padding-left: 25px;
    @include bodyText;
    color: $color-deep-dark-gray;
    cursor: pointer;
    user-select: none;

    &__checkbox {
       position: absolute;
       width: 0;
       height: 0;
       opacity: 0;
       cursor: pointer;
     }

    &__checkmark {
      position: absolute;
      left: 0;
      top: 0;
      width: 15px;
      height: 15px;
      border: 1px solid $color-gray;

      &::after {
         content: "";
         position: absolute;
         display: none;
      }
    }
  }

  .filter input:checked ~ .filter__checkmark {
    background-color: $color-blue;
    border: 1px solid $color-white;
  }

  .filter input:checked ~ .filter__checkmark::after {
    display: block;
  }

  .filter .filter__checkmark::after {
    left: 5px;
    border: solid $color-white;
    border-width: 0 2px 2px 0;
    width: 4px;
    height: 10px;
    transform: rotate(45deg);
  }

</style>
