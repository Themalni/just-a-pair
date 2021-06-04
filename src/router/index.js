import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import vueScrollto from 'vue-scrollto'
import { fb } from "@/firebase";

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
  const currentUser = fb.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    })
  } else if (requiresAuth && currentUser) {
    next('admin-dashboard')
  } else {
    next();
  }
})

export default router