<template>
  <div>
    <div class="size-variations pt-2">
      <p class="size-name">Size <span class="accent font-weight-bold text-uppercase">{{ selectedSize }}</span></p>
      <div class="row">
        <div class="col-md-7">
          <div v-for="(size) in sizes" :key="size.index" class="sizes mb-1 waves-effect waves-light" :class="{ 'size-selected': selectedSize === size.number, 'size-disabled': size.available === false }" :disabled="size.available === false" @click="selectShoesSize(size, size.index)">
            <span class="single-size text-uppercase">{{ size.number }}</span>
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
      selectedSize: '36',
      firstAvailableSize: ''
    }
  },
  props: {
    sizes: {
      type: Array
    }
  },
  components: {
    SizeGuide
  },
  methods: {
    selectShoesSize (size) {
      if (size.available === true) {
        return this.selectedSize = size.number
      }
      return size.number
    },
    defaultSize () {
      this.firstAvailableSize = size
    }
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
}
.size-selected {
  background-color: $main-blue;
}
.size-disabled {
  background-color: $grey;
  pointer-events: none;
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