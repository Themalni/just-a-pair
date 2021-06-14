import {
    SET_USER,
    CLEAR_USER,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SET_PRODUCT_TO_PREVIEW
} from "./types";

export default {
    [SET_USER]({commit}, { displayName, email }) {
        return commit(SET_USER, { displayName, email });
    },
    [CLEAR_USER]({commit}) {
        return commit(CLEAR_USER);
    },
    [ADD_TO_CART]({commit}, data) {
        return commit(ADD_TO_CART, data);
    },
    [REMOVE_FROM_CART]({commit}, {id, size}) {
        return commit(REMOVE_FROM_CART, {id, size});
    },
    [SET_PRODUCT_TO_PREVIEW]({commit}, product) {
        return commit(SET_PRODUCT_TO_PREVIEW, product);
    }
}