<template>
  <div>
    <span class="font-weight-bold">Product rating</span>
    <div class="d-flex align-items-center mb-2">
      <star-rating
        :show-rating="false"
        :increment="0.5"
        :max-rating="5"
        :rating="4.5"
        :read-only="true"
        inactive-color="#000"
        active-color="#ffd055"
        v-bind:star-size="22"
      ></star-rating>
      <span class="d-inline-block ml-3 mt-1">(15 reviews)</span>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "Rating",
  props: ["productRating"],
  components: {
    StarRating
  }
};
</script>

<style lang="scss" scoped>

</style>
