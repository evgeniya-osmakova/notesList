import Vue from 'vue';
import Router from 'vue-router';
import NotesList from '../components/NotesList.vue';
import NoteItem from '../components/NoteItem.vue';
import Page404 from '../components/Page404.vue';
import Auth from '../components/Auth.vue';
import store from '../vuex/store';

Vue.use(Router);

const routes = [
  { path: '/', name: 'NotesList', component: NotesList },
  { path: '/auth', name: 'Auth', component: Auth },
  { path: '/note', name: 'NoteItem', component: NoteItem },
  { path: '*', name: 'Page404', component: Page404 },
];

const router = new Router({ routes, mode: 'history' });

router.beforeEach((to, from, next) => {
  if ((to.name === 'NotesList' || to.name === 'note') && !store.state.isAuthenticated) {
    next({ name: 'Auth' });
  } else if (to.name === 'Auth' && store.state.isAuthenticated) {
    next({ name: 'NotesList' });
  } else {
    next();
  }
});

export default router;
