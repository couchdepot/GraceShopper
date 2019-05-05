import { combineReducers } from 'redux';
import { getProducts, productsReducer } from './productsReducer';
import { userReducer, loginUser, logOutUser, loginSession } from './userReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer
});

export { rootReducer, getProducts, loginUser, logOutUser, loginSession };
