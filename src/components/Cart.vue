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
                  <th scope="col" class="narrow-col">Remove</th>
                </tr>
              </thead>
              <tbody name="fade">
                <tr v-for="(item, index) in cart" v-bind="cart" :key="index">
                  <th scope="row">
                    <img :src="item.image" class="cart-item-img">
                  </th>
                  <td>{{ item.title }}</td>
                  <td>{{ item.color }}</td>
                  <td>{{ item.selectedSize }}</td>
                  <td>${{ item.price }}</td>
                  <td scope="col">
                    <button
                      class="btn light-blue btn-sm btn-remove"
                      @click="removeFromCart(index)"
                    >X</button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr v-show="total > 0">
                  <th id="total" colspan="4" class="text-right">Total:</th>
                  <td colspan="2">${{ total }}</td>
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
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapGetters(["products", "inCart"]),
    cart() {
      // return this.$store.getters.inCart.map(cartItem => {
      //   return this.$store.getters.products.find(itemToAdd => {
      //     return cartItem === itemToAdd.id;
      //   });
      // });
      return this.inCart;
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    }
  },
  methods: {
    removeFromCart(index) {
      this.$store.dispatch("removeFromCart", index);
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