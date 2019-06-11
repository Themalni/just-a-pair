import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import vueScrollto from 'vue-scrollto'

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

export default router