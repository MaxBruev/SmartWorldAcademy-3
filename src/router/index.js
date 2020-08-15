import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

  const routes = [
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/Register')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../components/Home')
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
