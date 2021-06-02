<template>
  <div class="mt-5">
    <image-grid />
    <collection header="New Collection">
      <product-thumbnail v-for="item in showThreeProducts" :key="item.id" :product="item"></product-thumbnail>
    </collection>
    <collection header="Sale">
      <product-thumbnail v-for="item in saleCollection" :key="item.id" :product="item"></product-thumbnail>
    </collection>
    <app-footer />
  </div>
</template>

<script>
import ImageGrid from "@/components/ImageGrid";
import Collection from "@/components/Collection";
import ProductThumbnail from "../components/product/ProductThumbnail";
import Footer from "@/components/Footer";
import products from "../services/productList";

export default {
  name: "Home",
  data() {
    return {
      products: products,
    }
  },
  components: {
    ImageGrid,
    Collection,
    ProductThumbnail,
    "app-footer": Footer
  },
  computed: {
    newCollection() {
      return this.products.filter(product => product.offer === "New");
    },
    showThreeProducts() {
      return this.newCollection.slice(0, 3);
    },
    saleCollection() {
      return this.products.filter(product => product.offer === "Sale");
    }
  }
};
</script>
