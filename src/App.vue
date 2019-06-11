<template>
  <div id="app">
    <navbar/>
    <cart/>
    <transition name="fade">
      <router-view/>
    </transition>
    <app-footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

export default {
  name: "app",
  components: {
    Navbar,
    Cart,
    "app-footer": Footer
  }
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
