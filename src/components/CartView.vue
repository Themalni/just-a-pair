<template>
<div>
    <!-- Modal -->
    <div class="modal fade" id="shoppingCartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
    <div class="modal-dialog modal-frame modal-top" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <table class="table">
                    <thead class="main-blue white-text">
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Color</th>
                            <th scope="col">Size</th>
                            <th scope="col">Price</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody name="fade" >
                        <tr v-for="(item, index) in cart" 
                            v-bind="cart"
                            :key="index">
                            <th scope="row">
                            <img :src="item.image" class="cart-item-img">
                            </th>
                            <td>{{ item.title }}</td>
                            <td>{{ item.color }}</td>
                            <td>{{ item.size.number }}</td>
                            <td>${{ item.price }}</td>
                            <td scope="col">
                                <button class="btn light-blue btn-sm btn-remove" @click="removeFromCart(index)">X</button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr v-show="total > 0">
                            <th id="total" colspan="3" class="text-right">Total:</th>
                            <td colspan="2">${{ total }}</td>
                        </tr>
                        <tr v-show="total === 0">
                            <th colspan="5" class="text-center">Your shopping cart is emty</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn orange-accent btn-sm" data-dismiss="modal">Continue Shopping</button>
                <button type="button" class="btn main-blue btn-sm">Checkout</button>
            </div>
        </div>
    </div>
    </div>
    <!-- /Modal -->
</div>
</template>

<script>
import { mapGetters} from 'vuex'

export default {
    props: [
        'id',
        'title',
        'price',
        'image',
        'color',
        'size'
    ],
    computed: {
        ...mapGetters([
            'products',
            'productPreview',
            'inCart'
        ]),
        cart() {
            return this.$store.getters.inCart.map((cartItem) => {
                return this.$store.getters.products.find((itemToAdd) => {
                    return cartItem === itemToAdd.id;
                });
            });
        },
        total() {
            return this.cart.reduce((acc, cur) => acc + cur.price, 0);
        }
    },
    methods: {
        removeFromCart(index) {
            this.$store.dispatch('removeFromCart', index);
        }
    }
}
</script>

<style lang="scss" scoped>
.modal-body {
    @include device-size(xs) {
        padding: 0;
    }
}
.modal-dialog {
    @include device-size(xs) {
        margin: 0;
    }
}
.btn-remove {
    padding: 5px 10px;
}
.cart-item-img {
    width: 80px;
    height: 100%;
}
.table {
    transition: 0.3s linear;

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
}
.modal-content {
    transition: 0.3s linear;
}
</style>