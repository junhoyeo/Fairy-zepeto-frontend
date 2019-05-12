// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import App from './App';
import router from './router';
import VueSocketIO from 'vue-socket.io';

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:5000/'
})

Vue.config.productionTip = false;

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:5000',
}));

import VueSessionStorage from 'vue-sessionstorage';
Vue.use(VueSessionStorage);

import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
