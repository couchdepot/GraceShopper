import axios from 'axios';

const GOT_LINE_ITEMS = 'GOT_LINE_ITEMS';
const ADDED_LINE_ITEM = 'ADDED_LINE_ITEM';

const gotLineItems = lineItems => {
  return {
    type: GOT_LINE_ITEMS,
    lineItems,
  };
};

const addedLineItem = lineItem => {
  return {
    type: ADDED_LINE_ITEM,
    lineItem,
  };
};

export const lineItemReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_LINE_ITEMS:
      return action.lineItems;
    case ADDED_LINE_ITEM:
      return [...state, action.lineItem];
    default:
      return state;
  }
};

// Thunks
// get all the line items for a cart
export const getLineItems = cartId => {
  return dispatch => {
    return axios
      .get(`/api/lineItems/${cartId}`)
      .then(response => response.data)
      .then(lineItems => dispatch(gotLineItems(lineItems)));
  };
};

// Add a new line item
export const addLineItem = item => {
  return dispatch => {
    return axios
      .post(`/api/lineItems`, item)
      .then(response => response.data)
      .then(lineItem => dispatch(addedLineItem(lineItem)));
  };
};

// Updated line item quantity
// After updating db will fetch all the line items for the cart
export const updateLineItem = lineItem => {
  return dispatch => {
    return axios
      .put(`api/lineItems/${lineItem.id}`, lineItem)
      .then(() => dispatch(getLineItems(lineItem.cartId)));
  };
};

// Remove a line item
export const removeLineItem = (lineItemId, cartId) => {
  return dispatch => {
    return axios
      .delete(`api/lineItems/${lineItemId}`)
      .then(() => dispatch(getLineItems(cartId)));
  };
};

export const addlineItemToCart = (productId, quantity, cartId, lineItem) => {
  return dispatch => {
    if (cartId && lineItem) {
      const newQuantity = lineItem.quantity + quantity;
      const udatedlineItem = { ...lineItem, quantity: newQuantity };
      dispatch(updateLineItem(udatedlineItem));
    }
    else if (cartId) {
      dispatch(addLineItem({ productId, quantity, cartId }));
    }
  }
}