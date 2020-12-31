import Vuex from 'vuex';
import Vue from 'vue';

import commonActions from './actions/actions';
import apiRequests from './actions/api-requests';
import mutations from './mutations/mutations';
import getters from './getters/getters';

const actions = { ...commonActions, ...apiRequests };

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    notes: [],
    loadingState: 'notRequested',
    currentSort: '',
    isAuthenticated: false,
    loginErr: false,
  },
  mutations,
  actions,
  getters,
});

export default store;
