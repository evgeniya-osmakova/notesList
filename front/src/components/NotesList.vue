<template>
  <section class="note-list">
    <div class="filter">
      <Sorting :type="'nameSort'" text="Title sort" class="filter__name"/>
      <Sorting :type="'dateSortDown'" text="Date sort (newest)" />
      <Sorting :type="'dateSortUp'" text="Date sort (oldest)" />
    </div>
    <div v-if="loadingState === 'failed'" class="error">
      <button class="note-list__add-btn" @click="onClick">Add new note</button>
      Loading Error
    </div>
    <div v-if="loadingState === 'requested'">
      <Loader />
    </div>
    <div v-if="loadingState === 'finished' && notes.length === 0">
      <div class="note-list__empty-warning">List is empty!</div>
      <button class="note-list__add-btn" @click="onClick">Add new note</button>
    </div>
    <div v-if="loadingState !== 'requested' && notes.length !== 0" class="note-list__catalog">
      <button class="note-list__add-btn" @click="onClick">Add new note</button>
      <div class="note-list__notes">
        <Note
            v-for="note in notes"
            :key="note.id"
            :note_data="note"
            class="note-item"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Note from './elements/Note.vue';
import Loader from './elements/Loader.vue';
import Sorting from './elements/Sorting.vue';

export default {
  name: 'NoteList',
  components: { Sorting, Loader, Note },
  computed: {
    ...mapGetters([
      'NOTES',
      'LOADING_STATE',
      'SORT_TYPE',
    ]),
    notes() {
      const notes = this.NOTES;
      const sorting = this.SORT_TYPE;
      const ids = Object.keys(notes);
      const notesList = ids.map((id) => notes[id]);
      if (sorting === 'nameSort') {
        return notesList.sort((a, b) => (a.title > b.title ? 1 : -1));
      }
      if (sorting === 'dateSortDown') {
        return notesList.sort((a, b) => (a.date < b.date ? 1 : -1));
      }
      if (sorting === 'dateSortUp') {
        return notesList.sort((a, b) => (a.date > b.date ? 1 : -1));
      }
      return notes;
    },
    loadingState() {
      return this.LOADING_STATE;
    },
  },
  methods: {
    ...mapActions([
      'GET_NOTES',
      'CLEAR_DATA',
    ]),
    onClick() {
      this.CLEAR_DATA();
      this.$router.push({ name: 'NoteItem' });
      this.GET_NOTES();
    },
  },
  mounted() {
    this.GET_NOTES();
  },
};
</script>

<style scoped lang="scss">

  .note-list {
    display: flex;
    flex-direction: column;
    width: 100vw;

    &__empty-warning {
      padding-top: 70px;
      @include h2Text;
      text-align: center;
      color: $color-light-black;
    }

    &__add-btn {
      margin-top: 30px;
      margin-left: 30px;
      @include h3Text;
      cursor: pointer;
      text-align: center;
      text-decoration: underline;
      color: $color-blue;
      border: none;
      background: transparent;
      width: 200px;

      &:hover {
        opacity: 0.7;
      }
    }

    &__catalog {
      display: flex;
      flex-direction: column;
    }

    &__notes {
      display: flex;
      flex-wrap: wrap;

      @media (max-width: 640px) {
        align-items: center;
        justify-content: center;
      }
    }
  }

  .error {
    color: $color-light-red;
    @include h3Text;
    text-align: center;
    margin-top: 50px;
  }

  .filter {
    margin-top: 15px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &__name {
      margin-right: 10px;
    }

    @media (max-width: 500px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
