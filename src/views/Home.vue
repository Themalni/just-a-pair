<template>
  <div class="mt-5">
    <image-grid/>
    <new-collection/>
    <sale-products/>
  </div>
</template>

<script>
import ImageGrid from "@/components/ImageGrid";
import NewCollection from "@/components/NewCollection";
import SaleProducts from "@/components/SaleProducts";

export default {
  name: "Home",
  components: {
    ImageGrid,
    NewCollection,
    SaleProducts
  }
};
</script>
