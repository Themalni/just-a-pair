<template>
  <div>
    <div class="collection">
        <div class="container">
            <h1 class="collection-header">{{ header }}</h1>
            <div class="row collection-items">
                <product-thumbnail v-for="item in products.slice(0, 6)" :key="item.id"
                        :id="item.id" 
                        :offer="item.offer" 
                        :title="item.title"
                        :image="item.image" 
                        :price="item.price"
                        :onSale="item.sale"
                        :salePercentage="item.salePercentage">
                </product-thumbnail>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import ProductThumbnail from '../components/ProductThumbnail.vue'

export default {
    name: 'product-grid',
    components: {
        ProductThumbnail
    },
    props: ['header'],
    computed: {
        products() { return this.$store.getters.products; },
        newCollection: function(){
            return this.products.filter((product) => {
                return product.offer === "New";
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/scss/styles.scss";

.collection {
    text-align: center;
    margin-bottom: 4em;
    padding-top: 4em;
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