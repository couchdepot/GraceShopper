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

// Thunks
// Log a user in
export const loginUser = (email, password) => {
  return dispatch => {
    return axios.post('/api/auth', {email, password})
    .then(response => response.data)
    .then(user => dispatch(loggedInUser(user)))
  }
}

// Log a user out
export const logOutUser = () => {
  return dispatch => {
    return axios.delete('/api/auth')
    .then(() => dispatch(loggedInUser({})))
  }
}

// Check session for logged in user. Will keep user logged in on hard reload
export const loginSession = () => {
  return dispatch => {
    return axios.get('/api/auth')
    .then(response => response.data)
    .then(user => dispatch(loggedInUser(user)))
  }
}
