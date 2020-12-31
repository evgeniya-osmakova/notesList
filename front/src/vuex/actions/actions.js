export default {
  CLEAR_DATA({ commit }) {
    commit('DELETE_DATA');
  },
  ADD_SORTING({ commit }, type) {
    commit('ADD_SORTING_TYPE', type);
  },
  CHANGE_AUTH({ commit }, isAuth) {
    commit('ADD_AUTH', isAuth);
  },
  ADD_LOGIN_ERR({ commit }, err) {
    commit('ADD_ERR', err);
  },
};
