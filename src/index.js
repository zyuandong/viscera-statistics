import Vue from 'vue';
import App from './app.vue';

const root = document.createElement('div');
document.body.appendChild(root);

import './assets/styles/common.scss';

new Vue({
  render: (h) => h(App)
}).$mount(root);
