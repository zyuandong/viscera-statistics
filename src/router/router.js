import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';

import Index from '../components/index.vue';
import Menu from '../components/menu.vue';
import Heart from '../components/heart.vue';
import Liver from '../components/liver.vue';
import Spleen from '../components/spleen.vue';
import Lungs from '../components/lungs.vue';
import Kidney from '../components/kidney.vue';

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
},{
  name: 'menu',
  path: '/menu',
  components: {
    fullScreen: Menu
  }
},{
  name: 'heart',
  path: '/heart',
  components: {
    fullScreen: Heart
  }
},{
  name: 'liver',
  path: '/liver',
  components: {
    fullScreen: Liver
  }
},{
  name: 'spleen',
  path: '/spleen',
  components: {
    fullScreen: Spleen
  }
},{
  name: 'lungs',
  path: '/lungs',
  components: {
    fullScreen: Lungs
  }
},{
  name: 'kidney',
  path: '/kidney',
  components: {
    fullScreen: Kidney
  }
}];

const router = new VueRouter({
  routes: routes
});

export default router;
