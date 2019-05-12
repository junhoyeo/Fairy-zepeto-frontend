import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Contact from '@/components/Contact';
import Chat from '@/components/Chat';
import Discovery from '@/components/Discovery';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat,
    },
    {
      path: '/Discovery',
      name: 'Discovery',
      component: Discovery,
    },
  ],
});
