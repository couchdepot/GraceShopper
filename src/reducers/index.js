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

import {
  cartReducer,
  getUsersCart,
  gotCart,
  updateUserCart,
  createUserCart,
} from './cartReducer';

import {
  getUserAddresses,
  createAddress,
  addressReducer,
  removeAddress,
  updateAddress,
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

import {
  categoriesReducer,
  getCategories,
  deleteCategory,
  updateCategory,
  createCategory,
} from './categoriesReducer';

import {
  currentOrdersReducer,
  pastOrdersReducer,
  getCurrentOrders,
  getPastOrders,
} from './ordersReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
  lineItems: lineItemReducer,
  categories: categoriesReducer,
  currentOrders: currentOrdersReducer,
  pastOrders: pastOrdersReducer,
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
  updateUserCart,
  createUserCart,
  getLineItems,
  addLineItem,
  updateLineItem,
  manageLineItemQty,
  lineItemsSession,
  emptyLineItem,
  getCategories,
  deleteCategory,
  updateCategory,
  createCategory,
  removeLineItem,
  getCurrentOrders,
  getPastOrders,
  getUserAddresses,
  removeAddress,
  createAddress,
  updateAddress,
};
