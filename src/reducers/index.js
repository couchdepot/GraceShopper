import { combineReducers } from 'redux'
import { getProducts, productsReducer } from './productsReducer'

const rootReducer = combineReducers({
    products: productsReducer
})

export { rootReducer, getProducts }
