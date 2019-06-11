<template>
  <div id="app">
    <navbar/>
    <transition name="fade">
      <router-view/>
    </transition>
    <app-footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "app",
  components: {
    Navbar,
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
