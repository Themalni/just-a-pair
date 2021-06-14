<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="shoppingCartModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="false"
    >
      <div class="modal-dialog modal-frame modal-top" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <table class="table">
              <thead class="main-blue white-text">
                <tr>
                  <th scope="col" class="narrow-col">Image</th>
                  <th scope="col" class="wide-col">Title</th>
                  <th scope="col" class="narrow-col">Color</th>
                  <th scope="col" class="narrow-col">Size</th>
                  <th scope="col" class="narrow-col">Price</th>
                  <th scope="col" class="narrow-col text-right">Amount</th>
                  <th scope="col" class="narrow-col text-right">Item total</th>
                  <th scope="col" class="narrow-col text-center">Remove</th>
                </tr>
              </thead>
              <tbody name="fade">
                <tr v-for="(item, index) in itemsWithTotal" v-bind="inCart" :key="index">
                  <th scope="row">
                    <img :src="item.image" class="cart-item-img">
                  </th>
                  <td>{{ item.title }}</td>
                  <td>{{ item.color }}</td>
                  <td>{{ item.size }}</td>
                  <td>${{ item.price | salePrice(item.salePercentage) }}</td>
                  <td class="text-right">{{ item.amount }}</td>
                  <td class="text-right">${{ item.total }}</td>
                  <td scope="col" class="text-center">
                    <button
                      class="btn light-blue btn-sm btn-remove"
                      @click="removeFromCart(item)"
                    >X</button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr v-show="total > 0">
                  <td colspan="6" class="text-right"><span class="mr-4">Total:</span> {{ amount }}</td>
                  <td colspan="1" class="text-right">${{ total }}</td>
                  <td></td>
                </tr>
                <tr v-show="total === 0">
                  <th colspan="5" class="text-center">Your shopping cart is emty</th>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn orange-accent btn-sm"
              data-dismiss="modal"
            >Continue Shopping</button>
            <button type="button" class="btn main-blue btn-sm">Checkout</button>
          </div>
        </div>
      </div>
    </div>
    <!-- /Modal -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import { REMOVE_FROM_CART } from "@/store/types";
import store from "@/store";

export default {
  name: "Cart",
  computed: {
    ...mapState(["inCart"]),

    itemsWithTotal() {
      const cart = this.inCart;
      return cart.map(item => {
        const priceAfterDiscount = item.price - (Math.floor(item.salePercentage / 100 * item.price))
        item.total = priceAfterDiscount * item.amount;
        return item;
      })
    },

    amount() {
      return this.inCart.reduce((acc, cur) => acc + cur.amount, 0);
    },

    total() {
      return this.inCart.reduce((acc, cur) => {
        if (cur.salePercentage) {
          const priceAfterDiscount = cur.price - (Math.floor(cur.salePercentage / 100 * cur.price));
          return acc + (priceAfterDiscount * cur.amount)
        }
        return acc + (cur.price * cur.amount)
      }, 0);
    }
  },
  methods: {
    removeFromCart(product) {
      const productData = {
        id: product.id,
        size: product.size
      }
      store.dispatch(REMOVE_FROM_CART, productData);
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-body {
  @include device-size(xs) {
    padding: 0;
  }
  @include device-size(xs, sm) {
    overflow: scroll;
  }
}
.modal-dialog {
  @include device-size(xs) {
    margin: 0;
  }
}
.btn {
  &.btn-remove {
    padding: 0.55em 1em;
  }
}
.cart-item-img {
  width: 80px;
  height: 100%;
}
.table {
  transition: 0.3s linear;
  overflow: auto;

  @include device-size(lg, xl) {
    table-layout: fixed;
    width: 100%;
  }

  td {
    vertical-align: middle;
    font-weight: bold;
    font-size: 1.1em;
    color: #444;

    @include device-size(xs) {
      font-size: 1em;
    }
  }
  th {
    @include device-size(lg, xl) {
      min-width: 200px;
    }
  }
  tfoot {
    th,
    td {
      vertical-align: middle;
      font-weight: bold;
      font-size: 1.4em;
      color: #444;
    }
  }
  .wide-col {
    @include device-size(lg, xl) {
      width: 40%;
    }
  }
  .narrow-col {
    @include device-size(lg, xl) {
      width: 10%;
    }
  }
}
.modal-content {
  transition: 0.3s linear;
}
</style>