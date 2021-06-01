export default {
    clearProductPreview(context) { context.commit('CLEAR_PRODUCT_PREVIEW') },
    showProduct(context, payload) { context.commit('SHOW_PRODUCT', payload) },
    setProductSelectedSize(context, payload) { context.commit('SET_PRODUCT_SELECTED_SIZE', payload) },
    addToCart(context, payload) { context.commit('ADD_TO_CART', payload) },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index) }
}