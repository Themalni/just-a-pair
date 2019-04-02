<template>
<div>
  <span class="product-rating-header">Product rating: </span>
  <div class="row no-gutters mb-2">
    <div class="col-md-3">
      <star-rating
        :show-rating="false"
        :increment="0.5"
        :max-rating="5"
        :rating="4.5"
        :read-only="true"
        inactive-color="#000"
        active-color="#ffd055"
        v-bind:star-size="22">
      </star-rating>
    </div>
    <div class="col-md-9 pt-1">
      <span class="rating-amount">(15 reviews)</span>
    </div>
  </div>
</div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  name: 'rating',
  props: ['productRating'],
  components: {
    StarRating
  }
}
</script>

<style lang="scss" scoped>
.product-rating-header {
  font-size: 1.2em;
}
</style>
