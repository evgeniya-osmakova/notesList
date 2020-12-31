export default {
  NOTES(state) {
    return state.notes;
  },
  LOADING_STATE(state) {
    return state.loadingState;
  },
  SORT_TYPE(state) {
    return state.currentSort;
  },
  IS_AUTHENTICATED(state) {
    return state.isAuthenticated;
  },
  LOGIN_ERR(state) {
    return state.loginErr;
  },
};
