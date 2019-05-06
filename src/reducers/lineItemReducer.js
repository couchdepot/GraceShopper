import axios from 'axios';

const GOT_LINE_ITEMS = 'GOT_LINE_ITEMS';

const gotLineItems = lineItems => {
  return {
    type: GOT_LINE_ITEMS,
    lineItems,
  };
};

export const lineItemReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_LINE_ITEMS:
      return action.lineItems;
    default:
      return state;
  }
};


// Thunks
// get all the line items for a cart
export const getLineItems = (cartId) => {
  return dispatch => {
    return axios.get(`/api/lineItems/${cartId}`)
    .then(response => response.data)
    .then(lineItems => dispatch(gotLineItems(lineItems)))
  }
}
