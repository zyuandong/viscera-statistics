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

const isRedirect = false;
const time = 10000;

const routes = [{
  path: '/',
  redirect: '/home'
},{
  name: 'home',
  path: '/home',
  meta: {
    isRedirect: isRedirect,
    time: time
  },
  components: {
    fullScreen: Index
  }
},{
  name: 'menu',
  path: '/menu',
  meta: {
    isRedirect: isRedirect,
    time: time
  },
  components: {
    fullScreen: Menu
  }
},{
  name: 'heart',
  path: '/heart',
  meta: {
    isRedirect: isRedirect,
    time: time
  },
  components: {
    fullScreen: Heart
  }
},{
  name: 'liver',
  path: '/liver',
  meta: {
    isRedirect: isRedirect,
    time: time
  },
  components: {
    fullScreen: Liver
  }
},{
  name: 'spleen',
  path: '/spleen',
  meta: {
    isRedirect: isRedirect,
    time: time
  },
  components: {
    fullScreen: Spleen
  }
},{
  name: 'lungs',
  path: '/lungs',
  meta: {
    isRedirect: isRedirect,
    time: time
  },
  components: {
    fullScreen: Lungs
  }
},{
  name: 'kidney',
  path: '/kidney',
  meta: {
    isRedirect: isRedirect,
    time: time
  },
  components: {
    fullScreen: Kidney
  }
}];

const router = new VueRouter({
  routes: routes
});

export default router;
