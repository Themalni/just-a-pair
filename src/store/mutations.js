import Vue from 'vue'

export default {
    CLEAR_PRODUCT_PREVIEW(state) {
        state.productPreview = [];
    },
    SHOW_PRODUCT(state, payload) {
        state.productPreview.push(payload);
    },
    SET_PRODUCT_SELECTED_SIZE(state, payload) {
        state.productPreview.map(product => product.selectedSize = payload);
    },
    ADD_TO_CART(state, payload) {
        state.inCart.push(payload)
    },
    REMOVE_FROM_CART(state, index) {
        state.inCart.splice(index, 1)
    },
    UPDATE_USER(state, { user }) {
        Vue.set(state, 'user', user)
    }
}