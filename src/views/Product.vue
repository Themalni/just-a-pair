<template>
  <div>
    <transition name="fade">
      <div class="product">
        <div class="container">
          <breadcrumbs/>
          <div class="row" v-for="(product, key) in productList" :key="key">
            <div class="col-md-5">
              <carousel :image="product.image" :sliderImages="product.sliderImages"/>
            </div>
            <div class="col-md-7">
              <h1 class="product-name">{{ product.title }}</h1>
              <rating/>
              <div class="row no-gutters">
                <div class="col-md-5">
                  <small class="dark-muted-color text-uppercase d-block mb-2">sku: {{ product.sku }}</small>
                </div>
              </div>
              <span :class="['fancy-font', 'mr-2', 'product-price', { 'muted-price': product.sale }]">
                ${{ product.price }}
              </span>
              <span v-if="product.sale" class="product-price fancy-font deep-orange-text">
                ${{ product.price | salePrice(product.salePercentage) }}
              </span>
              <div class="mt-2">
                  <span v-if="product.inStock" class="product-stock dark-muted-color font-bold d-block">in stock</span>
                  <span v-else :class="['product-stock', 'font-bold', 'd-block', {'deep-orange-text': !product.inStock}]">out of stock</span>
              </div>
              <size-variations :sizes="product.sizes" @selectedSize="setSelectedSize"/>
              <amount class="mb-4" @amount="setAmount"/>
              <span v-if="sizeNotSelected" class="d-block mt-1 mb-1 text-danger">Select the size first</span>
              <button
                class="btn btn-lg button-accent ml-0 mr-0 p-3 waves-effect waves-light text-uppercase"
                :class="{ 'disabled' : !product.inStock}"
                @click="addToCart(product)"
                :disabled="!product.inStock"
              >Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <product-details/>
    <collection header="You might also like" class="pt-4 mt-4">
      <product-thumbnail v-for="item in suggestions" :key="item.id" :product="item"></product-thumbnail>
    </collection>
    <offer/>
    <app-footer />
  </div>
</template>

<script>
import Rating from "@/components/Rating";
import SizeVariations from "@/components/size/SizeVariations";
import Carousel from "@/components/Carousel";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductDetails from "@/components/product/ProductDetails";
import Offer from "@/components/Offer";
import Collection from "@/components/Collection";
import ProductThumbnail from "../components/product/ProductThumbnail";
import products from "../services/productList";
import Amount from "@/components/Amount";
import Footer from "@/components/Footer";

import { mapState, mapActions } from "vuex";

export default {
  name: "Product",
  components: {
    Rating,
    SizeVariations,
    Carousel,
    Breadcrumbs,
    ProductDetails,
    Offer,
    Collection,
    ProductThumbnail,
    Amount,
    "app-footer": Footer
  },
  data() {
    return {
      products: products,
      selectedSize: null,
      sizeNotSelected: false,
      selectedAmount: 1
    }
  },
  computed: {
    ...mapState(["productPreview"]),
    productList() {
      return this.productPreview;
    },
    suggestions() {
      return this.products.slice(0, 6);
    }
  },
  methods: {
    ...mapActions(["setProductSelectedSize"]),

    setSelectedSize(size) {
      this.selectedSize = size;
      this.sizeNotSelected = false;
    },
    setAmount(amount) {
      this.selectedAmount = amount;
    },
    addToCart(product) {
      if (!this.selectedSize) {
        this.sizeNotSelected = true;
        return;
      }

      const { id, title, sku, price, salePercentage, color, image, sale } = product;
      const normalizedProduct = { id, title, sku, price, salePercentage, color, image, sale };

      const selectedProductData = {
        ...normalizedProduct,
        amount: this.selectedAmount,
        size: this.selectedSize
      }

      this.$store.dispatch("addToCart", selectedProductData)
        .then(() => {
          this.$notify({
            text: 'Item was added to the busket',
            type: 'success',
            duration: 3000
          })
          this.sizeNotSelected = false
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  margin-top: 3.5em;
  padding-bottom: 2em;

  @include device-size(xs, sm) {
    padding-bottom: 0;
  }
}
.product-name,
.product-price {
  font-family: $fancy-font;
  font-weight: bold;
}
.product-price {
  font-size: 2em;
}
.muted-price {
  color: grey;
  text-decoration: line-through;
}
.button-accent {
  width: 235px;
  margin-top: 0.37em;
  box-shadow: none;
    &:hover {
      color: #fff;
    }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>