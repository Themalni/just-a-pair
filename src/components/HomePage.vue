<template>
    <div class="mt-5">
      <image-grid/>
      <new-collection/>
      <sale-products/>
    </div>
</template>

<script>
import ImageGrid from '../components/ImageGrid.vue'
import NewCollection from '../components/NewCollection.vue'
import SaleProducts from '../components/SaleProducts.vue'

export default {
  name: 'home',
  components: {
    ImageGrid,
    NewCollection,
    SaleProducts
  }
}
</script>
