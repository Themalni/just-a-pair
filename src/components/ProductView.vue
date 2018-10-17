<template>
  <div>
    <div class="product">
        <div class="container">
            <breadcrumbs/>
            <div class="row" v-for="(item, index) in displaySingleProduct" :key="index">
                <div class="col-md-7">
                    <carousel 
                        :image="item.image"
                        :sliderImages="item.sliderImages"/>
                </div>
                <div class="col-md-5">
                    <h1 class="product-name">{{ item.title }}</h1>
                    <rating/>
                    <div class="row no-gutters">
                        <div class="col-md-5">
                            <div class="product-id text-uppercase">sku: {{ item.sku }}</div>
                        </div>
                        <div class="col-md-7">
                           <div class="product-stock font-bold" :class="{'deep-orange-text': item.stock == 'out of stock'}" >{{ item.stock }}</div> 
                        </div>
                    </div>
                    <div v-if="item.sale" class="product-price fancy-font deep-orange-text">${{ item.price | salePrice(item.salePercentage) }}</div>
                    <div v-else class="product-price mb-3">${{ item.price }}</div>
                    <size-variations/>
                    <button class="btn btn-lg button-accent ml-0 mr-0 p-3 waves-effect waves-light text-uppercase" :class="{disabled: item.stock == 'out of stock'}" @click="addToCart(item.id)" :disabled="item.stock == 'out of stock'">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
    <product-details/>
    <product-grid :header="similarProductsHeader"/>
    <offer/>
  </div>
</template>

<script>
import Rating from '../components/Rating.vue'
import SizeVariations from '../components/SizeVariations.vue'
import Carousel from '../components/Carousel.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import ProductDetails from '../components/ProductDetails.vue'
import Offer from '../components/Offer.vue'
import ProductGrid from '../components/ProductGrid.vue'

import { mapGetters} from 'vuex'

export default {
    name: 'product-view',
    data () {
        return {
            similarProductsHeader: "You might also like"
        }
    },
    components: {
        Rating,
        SizeVariations,
        Carousel,
        Breadcrumbs,
        ProductDetails,
        Offer,
        ProductGrid
    },
    props: [
        'id', 
        'image', 
        'offer', 
        'title', 
        'price', 
        'sku',
        'color', 
        'stock', 
        'onSale', 
        'salePercentage',
        'productRating'
    ],
    
    computed: {
        ...mapGetters([
            'products', 
            'productPreview',
            'displaySingleProduct'
        ]),
        singleProduct() {
            return this.$store.getters.productPreview.map((productPreviewItem) => {
                return this.$store.getters.products.find((itemToPreview) => {
                    return productPreviewItem === itemToPreview.id;
                });
            });
        },
        displaySingleProduct() {
            return this.singleProduct.slice(this.singleProduct.length - 1);
        }
    },
    methods: {
        addToCart(id) {
            this.$store.dispatch('addToCart', id);
        }
    }  
}
</script>

<style lang="scss" scoped>
@import "../styles/scss/styles.scss";

.product {
    margin-top: 3.5em;
    padding-bottom: 5.6em;
}
.product-name,
.product-price {
    font-family: $fancy-font;
    font-weight: bold;
}
.product-id,
.product-stock {
    margin: 0.5em 0 1em;
    font-size: 1.2em;
    color: $dark-grey;
}
.product-price {
    font-size: 2em;
}
.button-accent {
    width: 235px;
    margin-top: 0.37em;
    box-shadow: none;
}
</style>