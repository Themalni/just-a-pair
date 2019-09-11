<template>
  <div class="custom-popover">
    <!-- activator goes here -->
    <div @click="openPopover" v-click-outside="closePopover" v-if="$slots.activator">
      <slot name="activator"></slot>
    </div>
    <!-- content goes here -->
    <div v-show="isOpen" v-if="$slots.content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";

export default {
  name: "VPopover",
  directives: {
    ClickOutside
  },
  data: () => ({
    isOpen: false
  }),
  methods: {
    openPopover() {
      this.isOpen = true;
    },
    closePopover() {
      this.isOpen = false;
    }
  }
};
</script>
<style lang="scss">
.custom-popover {
  position: relative;
}
.popover-content {
  position: absolute;
  top: 42px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 1px 1px 10px -2px $dark-grey;
}

.popover-activator {
  line-height: 20px;
  font-size: 14px;
  color: rgb(49, 49, 49);
  cursor: pointer;

  .popover-button-icon {
    vertical-align: middle;
  }
}

.popover-arrow {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: 0;
  height: 0;
  border-width: 8px 12px;
  border-style: solid;
  border-color: transparent;
  border-bottom-color: #fff;
  z-index: 1;
}

.popover-item {
  display: block;
  min-width: 110px;
  padding: 1em;
  font-size: 1em;
  color: #666;
  position: relative;
  cursor: pointer;
  z-index: 2;

  &:nth-child(2) {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }

  &:last-child {
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  &.popover-link {
    &:hover {
      text-decoration: none;
      background-color: $light-blue;
      color: #fff;
    }
  }
}

.poprover-icon {
  width: 15px;
  display: inline-block;
  text-align: center;
}

.popover-item-text {
  margin-left: 0.5em;
}

.popover-link {
  color: $dark-grey;
}
</style>
