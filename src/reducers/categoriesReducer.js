import axios from 'axios';

const GOT_ALL_CATEGORIES = 'GOT_ALL_CATEGORIES';

const gotCategories = categories => ({
  type: GOT_ALL_CATEGORIES,
  categories,
});

export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_ALL_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};

export const getCategories = () => {
  return dispatch => {
    return axios
      .get('/api/products/categories')
      .then(response => gotCategories(response.data))
      .then(action => dispatch(action));
  };
};
