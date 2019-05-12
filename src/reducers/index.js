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
  getUserAddresses,
  createAddress,
  addressReducer,
} from './addressReducer';

import {
  lineItemReducer,
  getLineItems,
  addLineItem,
  updateLineItem,
  removeLineItem,
  emptyLineItem,
  manageLineItemQty,
  lineItemsSession,
} from './lineItemReducer';

import { categoriesReducer, getCategories } from './categoriesReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
  lineItems: lineItemReducer,
  categories: categoriesReducer,
  addresses: addressReducer,
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
  manageLineItemQty,
  lineItemsSession,
  emptyLineItem,
  getCategories,
  removeLineItem,
  getUserAddresses,
  createAddress,
};
