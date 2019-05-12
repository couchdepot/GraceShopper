import axios from 'axios';

const GOT_CURRENT_ORDERS = 'GOT_CURRENT_ORDERS';
const GOT_PAST_ORDERS = 'GOT_PAST_ORDERS';

const gotCurrentOrders = orders => ({
  type: GOT_CURRENT_ORDERS,
  orders,
});

const gotPastOrders = orders => ({
  type: GOT_PAST_ORDERS,
  orders,
});

export const currentOrdersReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_CURRENT_ORDERS:
      return action.orders;
    default:
      return state;
  }
};

export const pastOrdersReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_PAST_ORDERS:
      return action.orders;
    default:
      return state;
  }
};

export const getCurrentOrders = userId => {
  return dispatch => {
    return axios
      .get(`/api/orders/${userId}/current`)
      .then(response => gotCurrentOrders(response.data))
      .then(action => dispatch(action));
  };
};

export const getPastOrders = userId => {
  return dispatch => {
    return axios
      .get(`/api/orders/${userId}/past`)
      .then(response => gotPastOrders(response.data))
      .then(action => dispatch(action));
  };
};
