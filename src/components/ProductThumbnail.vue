<template>
    <div class="col-md-4 col-sm-6">
        <router-link :to="'/product-view/' + id" class="product-link">
            <div class="product-thumbnail pb-2" @click="showProduct(id)">
                <div v-if="!onSale" v-show="offer" class="offer-tag" :class="{accent: onSale}">{{ offer }}</div>
                <div v-else v-show="offer" class="offer-tag" :class="{accent: onSale}">{{ salePercentage + "%" }}</div>
                <div class="product-image">
                    <img :src="image">
                </div>
                <h3 class="fancy-font mt-2 mb-2">{{ title }}</h3>
                <span class="product-price fancy-font" :class="{ 'sale-price': onSale }">${{ price }}</span>
                <span v-if="onSale" class="product-price fancy-font deep-orange-text">${{ price | salePrice(salePercentage) }}</span>
            </div>
        </router-link>
    </div>
</template>

<script>

export default {
    name: 'product-thumbnail',
    props: [
        'id',
        'image', 
        'offer', 
        'title', 
        'price', 
        'onSale', 
        'salePercentage', 
        'stock', 
        'sliderImages'
    ],
    computed: {
        products() { return this.$store.state.products; }
    },
    methods: {
        showProduct(id) {
            this.$store.dispatch('showProduct', id);
        }
    } 
}
</script>

<style lang="scss" scoped>
@import "../styles/scss/styles.scss";

.product-thumbnail {
    width: 100%;
    margin-bottom: 1.5em;
    background-color: $light-grey;
    position: relative;
    color: $dark-grey;

    &:hover {

        .product-image {
            img {
                transform: scale(1.1);
                transition: all 0.5s linear;
            }
        }
    }
}
.offer-tag {
    width: 40px;
    height: 40px;
    background-color: $main-blue;
    color: #fff;
    line-height: 2.8;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
.product-image {
    width: 100%;
    background-color: $light-grey;
    overflow: hidden;
    
    img {
        transition: all 0.5s linear;
    }
}
.product-price {
    color: grey;
    font-size: 2em;
}
.product-link {
    &:hover {
        text-decoration: none;
    }
}
.accent {
    background-color: $orange-accent;
}
.btn {
    margin: 0.5em auto;
    display: block;
}
.sale-price {
    text-decoration: line-through;
    margin: 0 0.5em;
}
</style>