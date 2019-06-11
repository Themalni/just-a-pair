<template>
  <div class="mt-5">
    <cart/>
    <image-grid/>
    <new-collection/>
    <sale-products/>
  </div>
</template>

<script>
import ImageGrid from "@/components/ImageGrid";
import NewCollection from "@/components/NewCollection";
import SaleProducts from "@/components/SaleProducts";
import Cart from "@/views/Cart";

export default {
  name: "Home",
  components: {
    ImageGrid,
    NewCollection,
    SaleProducts,
    Cart
  }
};
</script>
