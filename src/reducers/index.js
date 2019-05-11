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
  ManageLineItemQty,
  lineItemsSession,
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
  createProduct,
  loginUser,
  logOutUser,
  loginSession,
  getUsersCart,
  gotCart,
  getLineItems,
  addLineItem,
  updateLineItem,
  ManageLineItemQty,
  lineItemsSession,
  emptyLineItem,
  getCategories,
  removeLineItem,
};
