<template>
  <div>
    <transition name="fade">
      <div class="product">
        <div class="container">
          <breadcrumbs/>
          <div class="row" v-for="(product, key) in productList" :key="key">
            <div class="col-md-7">
              <carousel :image="product.image" :sliderImages="product.sliderImages"/>
            </div>
            <div class="col-md-5">
              <h1 class="product-name">{{ product.title }}</h1>
              <rating/>
              <div class="row no-gutters">
                <div class="col-md-5">
                  <div class="product-id text-uppercase">sku: {{ product.sku }}</div>
                </div>
                <div class="col-md-7">
                  <div
                    class="product-stock font-bold"
                    :class="{'deep-orange-text': product.stock === 'out of stock'}"
                  >{{ product.stock }}</div>
                </div>
              </div>
              <div
                v-if="product.sale"
                class="product-price fancy-font deep-orange-text mb-3"
              >${{ product.price | salePrice(product.salePercentage) }}</div>
              <div v-else class="product-price mb-3">${{ product.price }}</div>
              <size-variations :sizes="product.sizes"/>
              <button
                class="btn btn-lg button-accent ml-0 mr-0 p-3 waves-effect waves-light text-uppercase"
                :class="{disabled: product.stock == 'out of stock'}"
                @click="addToCart(product.id)"
                :disabled="product.stock === 'out of stock'"
              >Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <product-details/>
    <collection header="You might also like">
      <product-thumbnail v-for="item in suggestions" :key="item.id" :product="item"></product-thumbnail>
    </collection>
    <offer/>
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

import { mapGetters } from "vuex";

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
    ProductThumbnail
  },
  computed: {
    ...mapGetters(["products", "productPreview"]),
    productList() {
      return this.productPreview.map(productPreviewItem => {
        return this.products.find(itemToPreview => {
          return productPreviewItem === itemToPreview.id;
        });
      });
    },
    suggestions() {
      return this.products.slice(0, 6);
    }
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch("addToCart", id);
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  margin-top: 3.5em;
  padding-bottom: 5.6em;

  @include device-size(xs, sm) {
    padding-bottom: 0;
  }
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>