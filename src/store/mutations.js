
export default { // used to update values in state
    setProducts(state, payload) {
        state.products = payload;
    },

    addNewProduct(state, payload) {
        state.products.push(payload)
    }

}