import Vue from 'vue';
import Router from 'vue-router';
import VueCookies from "vue-cookies";

//import user_service from '../services/user.service';

import Signin from '@/components/Signin';
import Signup from '@/components/Signup';
import Employees from '@/components/Employees';
import NewEmployee from '@/components/NewEmployee';

Vue.use(VueCookies);
Vue.use(Router);

let router = new Router({
  routes: [
    {
        path: "/signup",
        name: "Signup",
        component: Signup,
        meta: {needsAuth: false}
    },
    {
        path: "/",
        name: "Signin",
        component: Signin,
        meta: {needsAuth: false}
    },
    {
        path: "/employees",
        name: 'Employees',
        component: Employees,
        meta: {needsAuth: true}
    },
    {
        path: "/employee",
        name: 'NewEmployee',
        component: NewEmployee,
        meta: {needsAuth: true}
    },
    {
        path: "/employee/:id",
        name: 'NewEmployee',
        component: NewEmployee,
        meta: {needsAuth: true}
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    //TODO validate token before
    const token = sessionStorage.getItem('user-token');
    if (token) {
      next();
      return;
    } 
    next('/');
  } else {
    next()
  }
})

export default router;