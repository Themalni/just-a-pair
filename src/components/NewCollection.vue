<template>
  <div>
    <div class="collection" id="product-grid">
        <div class="container">
            <h1 class="collection-header">{{ header }}</h1>
            <div class="row collection-items">
                <product-thumbnail 
                    v-for="item in newCollection" 
                    :key="item.id"
                    v-bind="item">
                </product-thumbnail>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import ProductThumbnail from '../components/ProductThumbnail.vue'

export default {
    name: 'new-collection',
    data () {
        return {
            header: "New Collection"
        }
    },
    components: {
        ProductThumbnail
    },
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
.collection {
    text-align: center;
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