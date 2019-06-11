<template>
  <div>
    <div class="container">
      <!--Carousel Wrapper-->
      <div
        id="full-view-carusel"
        class="carousel slide carousel-fade"
        data-ride="carousel"
        data-interval="500"
      >
        <!--Slides-->
        <div class="carousel-inner" role="listbox" v-for="slide in mainSlider" :key="slide.id">
          <div class="carousel-item" :class="{active: slide.isActive}">
            <img :src="slide.image" class="d-block w-100" alt="First slide">
            <div class="carousel-item-text">
              <h2 class="sub-header">Welcome to</h2>
              <h1 class="header text-uppercase font-weight-bold">Just a Pair</h1>
              <h3 class="sub-header">Your favourite shoe store online</h3>
              <button class="btn btn-outline-light btn-lg mt-5">New collection</button>
            </div>
          </div>
        </div>
        <!--/.Slides-->
      </div>
      <!--/.Carousel Wrapper-->
    </div>
  </div>
</template>

<script>
export default {
  name: "FuulViewSlider",
  props: ["id", "image", "isActive"],
  computed: {
    mainSlider() {
      return this.$store.getters.mainSlider;
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel-item {
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
  }
}
.carousel-item-text {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;

  .header {
    font-size: 4em;
  }
}
</style>