import { combineReducers } from 'redux';
import { getProducts, productsReducer } from './productsReducer';
import { userReducer, loginUser, logOutUser, loginSession} from './userReducer';
import {cartReducer, getUsersCart} from './cartReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
});

export {
  rootReducer,
  getProducts,
  loginUser,
  logOutUser,
  loginSession,
  getUsersCart,
};
