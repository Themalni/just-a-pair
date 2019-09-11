<template>
  <div id="app">
    <navbar />
    <cart />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Cart from "@/components/Cart";

export default {
  name: "app",
  components: {
    Navbar,
    Cart
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
