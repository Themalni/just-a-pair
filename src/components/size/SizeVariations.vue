<template>
  <div>
    <div class="size-variations pt-2">
      <span class="d-block font-weight-bold mt-2 mb-2">Select size</span>
      <div class="row no-gutters">
        <div class="col-md-5">
          <div
            v-for="(size) in sizes"
            :key="size.index"
            class="sizes mb-1 waves-effect waves-light"
            :class="{ 'size-selected': selectedSize === size.number, 'size-disabled': size.available === false }"
            :disabled="size.available === false"
            @click="selectShoesSize(size, size.index)"
          >
            <span class="single-size text-uppercase">{{ size.number }}</span>
          </div>
        </div>
        <div class="col">
          <a
            href="#sizeGuideModal"
            class="size-guide-link mb-3 ml-3"
            data-toggle="modal"
            data-target="#sizeGuideModal"
          >
            <md-icon>straighten</md-icon>
            <span class="link-text">Size guide</span>
          </a>
        </div>
      </div>
    </div>
    <size-guide/>
    <transition name="fade">
      <p v-if="selectedSize.length > 0">
        Selected size:
        <span class="accent font-weight-bold">{{ selectedSize }}</span>
      </p>
    </transition>
  </div>
</template>

<script>
import SizeGuide from "./SizeGuide";

export default {
  name: "SizeVariations",
  data() {
    return {
      selectedSize: "",
      firstAvailableSize: ""
    };
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
    selectShoesSize(size) {
      this.$emit("selectedSize", size.number);
      if (size.available === true) {
        return (this.selectedSize = size.number);
      }
      return size.number;
    }
  }
};
</script>

<style lang="scss" scoped>
.size-name {
  font-size: 1.3em;

  .accent {
    color: #333;
  }
}
.sizes {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: $light-blue;
  margin-right: 0.5em;
  text-align: center;
  font-size: 1em;
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
  margin-top: 0.2em;
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
