// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueSocketIO from 'vue-socket.io';

import VueSessionStorage from 'vue-sessionstorage';

import VueSweetalert2 from 'vue-sweetalert2';
import router from './router';
import App from './App';

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:5000/',
});

Vue.config.productionTip = false;

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:5000',
}));
Vue.use(VueSessionStorage);
Vue.use(VueSweetalert2);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
