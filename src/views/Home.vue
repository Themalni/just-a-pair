<template>
  <div class="mt-5">
    <page-header class="mb-4" />
    <collection header="New Collection" class="pt-4">
      <product-thumbnail v-for="item in showThreeProducts" :key="item.id" :product="item"></product-thumbnail>
    </collection>
    <collection header="Sale" class="mt-4 mb-4">
      <product-thumbnail v-for="item in saleCollection" :key="item.id" :product="item"></product-thumbnail>
    </collection>
    <app-footer />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
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
    PageHeader,
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
