import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { productsReducer } from './reducers';

const rootReducer = combineReducers({
    products: productsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
