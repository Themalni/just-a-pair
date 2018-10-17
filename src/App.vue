<template>
  <div id="app">
    <app-header/>
    <cart-view/>
    <router-view></router-view>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './components/blocks/Header/AppHeader.vue'
import AppFooter from './components/blocks/Footer/AppFooter.vue'
import CartView from './components/CartView.vue'

export default {
  name: 'app',
  props: [
    'id', 
    'title', 
    'price', 
    'image'
  ],
  components: {
    AppHeader,
    AppFooter,
    CartView
  }
}
</script>

<style lang="scss">
@import "./styles/scss/styles.scss";

button {
    border: 0;
    background-color: transparent;
    padding: 0;
}
</style>
