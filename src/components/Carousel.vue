<template>
  <div>
    <!--Carousel Wrapper-->
    <div id="carousel-product-view" class="carousel slide carousel-fade" data-interval="8000">
        <!--Indicators-->
        <ol class="carousel-indicators">
            <li data-target="#carousel-product-view" data-slide-to="index" class="waves-effect waves-light" v-for="(value, index) in sliderImages" :key="index">
                <img :src="value" class="d-block w-100">
            </li>
        </ol>
        <!--/.Indicators-->
        <!--Slides-->
        <div class="carousel-inner" role="listbox">
            <!--First slide-->
            <div class="carousel-item" v-for="(value, index) in sliderImages" :key="index" :class="{ active: index === 0 }">
                <img :src="value" class="d-block w-100" alt="First slide">
            </div> 
            <!--/First slide-->
        </div>
        <!--/.Slides-->
    </div>
    <!--/.Carousel Wrapper-->
  </div>
</template>

<script>
export default {
    name: 'carousel',
    props: ['id', 'image', 'sliderImages'],
    computed: {
        products() { return this.$store.getters.products; },
        singleProduct() { return this.$store.getters.singleProduct; }
    },
    mounted(){
      $('.carousel').carousel();
    }
}
</script>

<style lang="scss" scoped>

.carousel {
    @include device-size(xs){
        margin-bottom: 4.5em;
    }
     @include device-size(sm){
        margin-bottom: 5.5em;
    }
}
.slider {
    width: 100%;
    background-color: $grey;
    height: 600px;
}
.carousel-indicators {
    bottom: -6em;
    margin-left: 25%;
    margin-right: 25%;

    li {
        width: auto;
        height: 60px;
        background-color: transparent;
        border-radius: 0;

        &:before,
        &:after {
            display: none;
        }
    }
}
</style>