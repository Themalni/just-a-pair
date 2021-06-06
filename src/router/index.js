import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import vueScrollto from 'vue-scrollto'
import { fb } from "@/firebase";
import store from "@/store";

Vue.use(Router)
Vue.use(vueScrollto)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return {
      x: 0,
      y: 0
    };
  },
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = fb.auth().currentUser || store.state.user;
  const authRequired = to.matched.some(record => record.meta.authRequired);

  if (authRequired && !currentUser) {
    next({ name: 'Home' });
  } else if (authRequired && currentUser && to.path !== '/user-dashboard') {
    next({
      path: '/user-dashboard',
      replace: true
    })
  } else {
    next();
  }
})

export default router