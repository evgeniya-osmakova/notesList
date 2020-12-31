export default {
  DELETE_DATA: (state) => {
    state.error = '';
    state.loadingState = 'notRequested';
    state.currentSort = '';
  },
  SET_LOADING_STATE: (state, value) => {
    state.loadingState = value;
  },
  ADD_NOTES: (state, value) => {
    state.notes = value;
  },
  ADD_SORTING_TYPE: (state, value) => {
    if (state.currentSort === value) {
      state.currentSort = '';
    } else {
      state.currentSort = value;
    }
  },
  ADD_ERR: (state, err) => {
    state.loginErr = err;
  },
  ADD_AUTH: (state, isAuth) => {
    state.isAuthenticated = isAuth;
  },
};
