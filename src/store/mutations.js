import {
    SET_USER,
    CLEAR_USER,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SET_PRODUCT_TO_PREVIEW
} from "./types";

export default {
    [SET_USER](state, payload) {
        state.user = payload;
    },
    [CLEAR_USER](state) {
        state.user = null;
    },
    [ADD_TO_CART](state, payload) {
        const foundInCart = state.inCart.some(item => item.id === payload.id && item.size === payload.size);

        if(foundInCart) {
            state.inCart.map(item => {
                if(item.id === payload.id) {
                    item.amount = item.amount + payload.amount;
                }
                return item;
            })
        } else {
            state.inCart.push(payload)
        }
    },
    [REMOVE_FROM_CART](state, index) {
        state.inCart.splice(index, 1)
    },
    [SET_PRODUCT_TO_PREVIEW](state, payload) {
        state.productPreview = payload;
    }
}