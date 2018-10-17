<template>
    <div class="container-fluid pr-0 pl-0">
        <div class="row no-gutters">
            <div class="col-md-12 grid-image-container">
                <img class="grid-image grid-image-overlay" :src="headerImage"/>
                <div class="grid-image-text">
                    <h2 class="sub-header">Welcome to</h2>
                    <h1 class="header text-uppercase font-weight-bold">Just a Pair</h1>
                    <h3 class="sub-header">Your favourite shoe store online</h3>
                    <button v-scroll-to="'#product-grid'" class="btn btn-outline-light btn-lg mt-5">New collection</button>
                </div>
            </div>
        </div>
        <div class="row no-gutters">
            <div class="col-md-4" v-for="item in gridImages" :key="item.id">
                <img class="grid-image" :src="item.image"/>
                <div class="grid-image-text-bottom pb-4">
                    <h2 class="sub-header font-weight-bold">{{ item.header }}</h2>
                    <button class="btn btn-sm mt-2 button-accent">{{ item.button }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'image-grid',
    props: [
        'id', 
        'image', 
        'isActive'
    ],
    data () {
        return {
            headerImage: '../assets/header_image.jpg'
        }
    },
    computed: {
        gridImages() { return this.$store.getters.gridImages; }
    },
}
</script>

<style lang="scss" scoped>
@import "../styles/scss/styles.scss";

.grid-image-container {
    position: relative;

    &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.3);
    }
}
.grid-image {
    width: 100%;
    height: auto;
}
.grid-image-text {
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
.grid-image-text-bottom {
    width: 100.01%;
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    text-align: center;

    &:before {
        content: "";
        width: 100%;
        height: 200px;
        position: absolute;
        left: 0;
        bottom: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
        z-index: -1;
    }
}
.button-accent {
    width: 190px;
    font-size: 1.1em;
}
</style>