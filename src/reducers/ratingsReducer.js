import axios from 'axios';

const GOT_ALL_RATINGS = 'GOT_ALL_RATINGS';

const gotRatings = ratings => ({
  type: GOT_ALL_RATINGS,
  ratings,
});

export const ratingsReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_ALL_RATINGS:
      return action.ratings;
    default:
      return state;
  }
};

export const getRatings = () => {
  return dispatch => {
    return axios
      .get('/api/ratings')
      .then(response => gotRatings(response.data))
      .then(action => dispatch(action));
  };
};

export const addRating = (user, product, rating) => {
  return dispatch => {
    return axios
      .post('/api/ratings', user, product, rating)
      .then(() => dispatch(getRatings()));
  };
};
