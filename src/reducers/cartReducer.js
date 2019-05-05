import axios from 'axios';

const GOT_CART = 'GOT_CART';

const gotCart = cart => {
  return {
    type: GOT_CART,
    cart,
  };
};

export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case GOT_CART:
      return action.cart;
    default:
      return state;
  }
};

// Thunks
export const getUsersCart = (userId, status) => {
  return dispatch => {
    return axios
      .get(`/api/carts/${userId}/${status}`)
      .then(response => response.data)
      .then(cart => dispatch(gotCart(cart[0])));
  };
};
