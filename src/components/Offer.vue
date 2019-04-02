<template>
  <div>
    <div class="container">
        <a href="#">
            <div class="offer"></div>
            <div class="offer-text">
                <h3 class="text-uppercase">{{ offerType }}</h3>
                <h1 class="font-weight-bold">{{ offerCategory }}</h1>
            </div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            offerType: "New collection",
            offerCategory: "Autumn Adventure"
        }
    }
}
</script>

<style lang="scss" scoped>
.offer {
    width: 100%;
    height: 400px;
    margin: 4em 0;
    background-color: $grey;
    color: #fff;
    font-family: $fancy-font;
    text-align: center;
    background-image: url('/assets/offer_new_collection.jpg');
    background-size: cover;
    background-position: bottom;
    position: relative;
    
    &:after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: #000;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.2;
        transition: all 0.3s linear;
    }
}
.offer-text {
    width: 100%;
    position: absolute;
    top: 12%;
    color: #fff;
    text-align: center;

    @include device-size(xs, sm) {
        top: 20%;
    }
}
 a:not(.md-button) {
     position: relative;
     display: block;

    &:hover {
        text-decoration: none;

        .offer {
            &:after {
                opacity: 0;
                transition: all 0.3s linear;
            }
        }
    }
}
</style>