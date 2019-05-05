import axios from 'axios';

const LOGGED_IN_USER = 'LOGGED_IN_USER';

const loggedInUser = user => {
  return {
    type: LOGGED_IN_USER,
    user,
  };
};

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGGED_IN_USER:
      return action.user;
    default:
      return state;
  }
};

export const loginUser = (email, password) => {
  return dispatch => {
    return axios.post('/api/auth', {email, password})
    .then(response => response.data)
    .then(user => dispatch(loggedInUser(user)))
  }
}
