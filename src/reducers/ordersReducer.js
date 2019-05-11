import axios from 'axios';

const GOT_ORDERS = 'GOT_ORDERS';

const gotOrders = orders => ({
  action: GOT_ORDERS,
  orders,
});

export const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_ORDERS:
      return action.orders;
    default:
      return state;
  }
};

export const getOrders = userId => {
  return dispatch => {
    return axios
      .get(`/api/orders/${userId}`)
      .then(response => gotOrders(response.data))
      .then(action => dispatch(action));
  };
};
