import { combineReducers } from 'redux';
import { getProducts, productsReducer } from './productsReducer';
import {userReducer, loginUser, logOutUser, loginSession} from './userReducer';
import { cartReducer, getUsersCart } from './cartReducer';
import { lineItemReducer, getLineItems } from './lineItemReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
  lineItems: lineItemReducer,
});

export {
  rootReducer,
  getProducts,
  loginUser,
  logOutUser,
  loginSession,
  getUsersCart,
  getLineItems,
};
