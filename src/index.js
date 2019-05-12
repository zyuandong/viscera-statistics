import Vue from 'vue';
import App from './app.vue';

import router from './router/router';
import './assets/styles/common.scss';

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  router,
  render: h => h(App)
}).$mount(root);
