<template>
  <div>
    <div class="collection" id="product-grid">
      <div class="container">
        <h1 class="collection-header">{{ header }}</h1>
        <div class="row collection-items">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collection",
  props: {
    header: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.collection {
  text-align: center;
}
.collection-header {
  color: #333;
  font-family: $fancy-font;
  font-weight: bold;
}
.collection-items {
  margin-top: 2em;
}
</style>