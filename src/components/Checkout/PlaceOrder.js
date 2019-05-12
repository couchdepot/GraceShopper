import React from 'react';
import { connect } from 'react-redux';

import { updateUserCart, createUserCart } from '../../reducers';

import { Button } from '@material-ui/core';

const PlaceOrder = state => {
  // Make a put request to cart
  // add the address Id
  // change status to processing
  // Create a new cart

  console.log(state);

  const onClick = () => {};

  return (
    <div style={{ width: '100%' }}>
      <Button
        onClick={onClick}
        variant="contained"
        color="primary"
        style={{ width: '100%' }}
      >
        Place order
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    updateCart: () => dispatch(updateUserCart()),
    createCart: () => dispatch(createUserCart()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceOrder);
