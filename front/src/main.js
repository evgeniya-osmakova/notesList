import Vue from 'vue';
import store from './vuex/store';
import router from './router/router';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(require('vue-moment'));

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
