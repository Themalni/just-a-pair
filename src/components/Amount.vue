<template>
  <div>
    <span class="font-weight-bold d-block mt-2 mb-2">{{ label }}</span>
    <div class="amount">
      <button
          class="btn m-0"
          :disabled="selectedAmount === 1"
          @click="decreaseAmount"
      >
          -
      </button>
      <span class="amount-number border-dark">{{ selectedAmount }}</span>
      <button class="btn m-0" @click="increaseAmount">+</button>
    </div>
  </div>
  </template>

<script>

import { mapState } from "vuex";

export default {
  name: "Amount",
  props: {
    label: {
        type: String,
        default: "Select amount"
    }
  },

  data() {
    return {
        selectedAmount: 1
    }
  },

  watch: {
    productPreviewId() {
      this.resetAmount();
    }
  },

  computed: {
    ...mapState(["productPreview"]),

    productPreviewId() {
      return this.productPreview.id;
    }
  },

  methods: {
    resetAmount() {
      this.selectedAmount = 1;
    },
    increaseAmount() {
      this.selectedAmount = ++this.selectedAmount;
      this.$emit('amount', this.selectedAmount);
    },
    decreaseAmount() {
      if(this.selectedAmount <= 1) {
          return;
      }
      this.selectedAmount = --this.selectedAmount;
      this.$emit('amount', this.selectedAmount);
    }
  }
}
</script>

<style lang="scss" scoped>
.amount {
  display: inline-flex;
  align-items: center;

  .btn {
    padding: 5px 10px;
    box-shadow: none;
    color: inherit;
    border: 2px solid $dark-grey;
    line-height: 16px;

    &:first-of-type {
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-of-type {
      border-left: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &:disabled {
      border-color: $grey;
      color: $grey;
    }
  }
}
.amount-number {
    border: 2px solid $dark-grey;
    padding: 5px 10px;
    line-height: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>