import { combineReducers } from 'redux';

import {
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  productsReducer,
} from './productsReducer';

import {
  userReducer,
  loginUser,
  logOutUser,
  loginSession,
} from './userReducer';

import { cartReducer, getUsersCart, gotCart } from './cartReducer';

import {
  lineItemReducer,
  getLineItems,
  addLineItem,
  updateLineItem,
  removeLineItem,
  emptyLineItem,
  addlineItemToCart,
} from './lineItemReducer';

import { categoriesReducer, getCategories } from './categoriesReducer';

import { ordersReducer, getOrders } from './ordersReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
  lineItems: lineItemReducer,
  categories: categoriesReducer,
  orders: ordersReducer,
});

export {
  rootReducer,
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  loginUser,
  logOutUser,
  loginSession,
  getUsersCart,
  gotCart,
  getLineItems,
  addLineItem,
  updateLineItem,
  addlineItemToCart,
  emptyLineItem,
  getCategories,
  removeLineItem,
  getOrders,
};
