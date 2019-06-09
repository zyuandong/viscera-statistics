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

const routes = [{
  path: '/',
  redirect: '/home'
},{
  name: 'home',
  path: '/home',
  meta: {
    isRedirect: isRedirect
  },
  components: {
    fullScreen: Index
  }
},{
  name: 'menu',
  path: '/menu',
  meta: {
    isRedirect: isRedirect
  },
  components: {
    fullScreen: Menu
  }
},{
  name: 'heart',
  path: '/heart',
  meta: {
    isRedirect: isRedirect
  },
  components: {
    fullScreen: Heart
  }
},{
  name: 'liver',
  path: '/liver',
  meta: {
    isRedirect: isRedirect
  },
  components: {
    fullScreen: Liver
  }
},{
  name: 'spleen',
  path: '/spleen',
  meta: {
    isRedirect: isRedirect
  },
  components: {
    fullScreen: Spleen
  }
},{
  name: 'lungs',
  path: '/lungs',
  meta: {
    isRedirect: isRedirect
  },
  components: {
    fullScreen: Lungs
  }
},{
  name: 'kidney',
  path: '/kidney',
  meta: {
    isRedirect: isRedirect
  },
  components: {
    fullScreen: Kidney
  }
}];

const router = new VueRouter({
  routes: routes
});

export default router;
