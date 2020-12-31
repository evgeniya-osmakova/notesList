import axios from 'axios';
import routes from './routes';

const timeout = 10000;

export default {
  async GET_NOTES({ commit }) {
    commit('SET_LOADING_STATE', 'requested');
    try {
      const url = routes.notesListUrl();
      const response = await axios.get(url, { timeout });
      commit('SET_LOADING_STATE', 'finished');
      commit('ADD_NOTES', response.data);
    } catch (err) {
      commit('SET_LOADING_STATE', 'failed');
    }
  },

  async ADD_NOTE({ commit }, data) {
    commit('SET_LOADING_STATE', 'requested');
    try {
      const url = routes.notesListUrl();
      const { title, description } = data;
      await axios.post(url, { title, description }, { timeout });
      commit('SET_LOADING_STATE', 'finished');
    } catch (err) {
      commit('SET_LOADING_STATE', 'failed');
    }
  },

  async DELETE_NOTE({ commit }, id) {
    commit('SET_LOADING_STATE', 'requested');
    try {
      const url = routes.noteItemUrl(id);
      await axios.delete(url, { timeout });
      commit('SET_LOADING_STATE', 'finished');
    } catch (err) {
      commit('SET_LOADING_STATE', 'failed');
    }
  },
};
