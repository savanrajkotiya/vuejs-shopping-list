import { productsList } from "../shared/data/products";

export default{ // same as methods
    // make the api call
    fetchProducts(context) {
        context.commit('setProducts', productsList)
    },

    addProduct(context, payload) {
        context.commit('addNewProduct', payload)
    }
}