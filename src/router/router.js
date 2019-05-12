import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';

import Index from '../components/index.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  redirect: '/home'
},{
  name: 'home',
  path: '/home',
  components: {
    fullScreen: Index
  }
}];

const router = new VueRouter({
  routes: routes
});

export default router;