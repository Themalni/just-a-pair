import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
import './styles/scss/styles.scss';
import App from './App.vue';
import vueScrollto from 'vue-scrollto';
import {store} from './store';
import filters from './filters';
import Newsletter from './components/blocks/Footer/Newsletter.vue';
import Routes from './routes';

Vue.config.productionTip = false

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(vueScrollto)

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return { x: 0, y: 0 };
  }
})

Vue.component('newsletter', Newsletter)

new Vue({
  store: store,
  router: router,
  filters: filters,
  render: h => h(App)
}).$mount('#app')