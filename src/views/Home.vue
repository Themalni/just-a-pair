<template>
  <div class="mt-5">
    <image-grid/>
    <collection header="New Collection">
      <product-thumbnail v-for="item in showThreeProducts" :key="item.id" :product="item"></product-thumbnail>
    </collection>
    <collection header="Sale">
      <product-thumbnail v-for="item in saleCollection" :key="item.id" :product="item"></product-thumbnail>
    </collection>
  </div>
</template>

<script>
import ImageGrid from "@/components/ImageGrid";
import Collection from "@/components/Collection";
import ProductThumbnail from "../components/product/ProductThumbnail";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    ImageGrid,
    Collection,
    ProductThumbnail
  },
  computed: {
    ...mapGetters(["products"]),
    productList() {
      return this.products;
    },
    newCollection: function() {
      return this.productList.filter(product => {
        return product.offer === "New";
      });
    },
    showThreeProducts: function() {
      return this.newCollection.slice(0, 3);
    },
    saleCollection: function() {
      return this.productList.filter(product => {
        return product.offer === "Sale";
      });
    }
  }
};
</script>
