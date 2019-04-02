<template>
  <div>
    <div class="size-variations pt-2">
        <p class="size-name">Size <span class="accent font-weight-bold text-uppercase">36</span></p>
        <div class="row">
            <div class="col-md-7">
                <div v-for="(value) in sizes" :key="value" class="sizes mb-1 waves-effect waves-light">
                    <span class="single-size text-uppercase">{{ value }}</span>
                </div>
            </div>
            <div class="col-md-5">
                <a href="#sizeGuideModal" class="size-guide-link mb-3" data-toggle="modal" data-target="#sizeGuideModal">
                    <md-icon>straighten</md-icon><span class="link-text">Size guide</span>
                </a>
            </div>
        </div>
    </div>
    <size-guide/>
  </div>
</template>

<script>
import SizeGuide from '../components/SizeGuide.vue'

export default {
    name: 'size-variations',
    data() {
        return {
            sizes: ['36', '37', '38', '39', '40', '41', '42']
        }
    },
    components: {
        SizeGuide
    }
}
</script>

<style lang="scss" scoped>
.size-name {
    font-size: 1.2em;

    .accent {
        color: #333;
    }
}
.sizes {
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: $light-blue;
    margin-right: 0.5em;
    text-align: center;
    font-size: 1.3em;
    color: #fff;
    line-height: 2.2;
    cursor: pointer;

    &:first-child {
        background-color: $main-blue;
    }
    &:nth-child(n+4) {
        background-color: $grey;
        cursor: not-allowed;
    }
}
.size-guide-link {
    margin-top: 0.5em;
    color: $dark-grey;
    display: block;
    font-size: 1.2em;

    .link-text {
        margin-left: 0.3em;
    }

    &:hover {
        color: $grey;
        text-decoration: none;
    }
}
</style>