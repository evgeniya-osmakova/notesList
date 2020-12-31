<template>
  <div class="note-item">
    <form class="form" @submit="login($event)">

      <p class="form__row">
        <label class="form__label" for="username">Login</label>
        <input
            id="username"
            v-model="username"
            type="text"
            name="username"
            class="form__input"
        >
      </p>

      <p class="form__row">
        <label class="form__label" for="password">Password</label>
        <input
            id="password"
            v-model="password"
            name="password"
            class="form__input"
        >
      </p>

      <p>
        <input class="button" type="submit" value="Login">
      </p>

      <div v-if="loginErr" class="note-item__error">
        Incorrect login/password
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Auth.vue',
  data() {
    return {
      username: null,
      password: null,
    };
  },
  computed: {
    ...mapGetters([
      'IS_AUTHENTICATED',
      'LOGIN_ERR',
    ]),
    isAuthenticated() {
      return this.IS_AUTHENTICATED;
    },
    loginErr() {
      return this.LOGIN_ERR;
    },
  },
  methods: {
    ...mapActions([
      'ADD_LOGIN_ERR',
      'CHANGE_AUTH',
    ]),
    login(e) {
      e.preventDefault();
      if (this.username === 'login' && this.password === 'password') {
        this.CHANGE_AUTH(true);
        this.ADD_LOGIN_ERR(false);
        this.$router.push({ name: 'NotesList' });
      } else {
        this.ADD_LOGIN_ERR(true);
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
