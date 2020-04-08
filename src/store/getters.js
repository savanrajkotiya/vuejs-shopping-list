export default{ // same as computed properties
    reverseProducts(state) {
        return state.products.slice(0).reverse()
    }
}