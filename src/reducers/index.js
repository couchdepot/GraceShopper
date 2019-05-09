import { combineReducers } from 'redux';
import {
  getProducts,
  deleteProduct,
  updateProduct,
  productsReducer,
} from './productsReducer';
import {
  userReducer,
  loginUser,
  logOutUser,
  loginSession,
} from './userReducer';
import { cartReducer, getUsersCart } from './cartReducer';
import {
  lineItemReducer,
  getLineItems,
  addLineItem,
  updateLineItem,
} from './lineItemReducer';
import { categoriesReducer, getCategories } from './categoriesReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
  lineItems: lineItemReducer,
  categories: categoriesReducer,
});

export {
  rootReducer,
  getProducts,
  deleteProduct,
  updateProduct,
  loginUser,
  logOutUser,
  loginSession,
  getUsersCart,
  getLineItems,
  addLineItem,
  updateLineItem,
  getCategories,
};
