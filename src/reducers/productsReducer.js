import axios from 'axios'

const GOT_ALL_PRODUCTS = 'GOT_ALL_PRODUCTS'

const gotProducts = products => ({
    type: GOT_ALL_PRODUCTS,
    products
})

export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case GOT_ALL_PRODUCTS:
            return action.products
        default:
            return state
    }
}

// Thunks
// get all the products
export const getProducts = () => {
    return dispatch => {
        return axios.get('/api/products')
            .then(response => gotProducts(response.data))
            .then(action => dispatch(action))
    }
}

// delet a product
export const deleteProduct = (productId) => {
    return dispatch => {
        return axios.delete(`/api/products/${productId}`)
            .then(() => dispatch(getProducts()))
    }
}
