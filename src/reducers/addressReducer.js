import axios from 'axios';

const GOT_ALL_ADDRESSES = 'GOT_ALL_ADDRESSES';

// Reducer
export const addressReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_ALL_ADDRESSES:
      return action.addresses;
    default:
      return state;
  }
};

export const gotAddresses = addresses => ({
  type: GOT_ALL_ADDRESSES,
  addresses,
});

export const getUserAddresses = userId => {
  return dispatch => {
    return axios
      .get(`/api/address/${userId}`)
      .then(response => gotAddresses(response.data))
      .then(action => dispatch(action));
  };
};

export const createAddress = (userId, address) => {
  return dispatch => {
    return axios
      .post(`/api/address`, { ...address, userId })
      .then(() => dispatch(getUserAddresses(userId)));
  };
};
