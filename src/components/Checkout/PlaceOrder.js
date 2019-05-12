import React from 'react';
import { connect } from 'react-redux';

import { updateUserCart, createUserCart, getLineItems } from '../../reducers';

import { Button } from '@material-ui/core';

const PlaceOrder = ({
  updateCart,
  createCart,
  selectedAddressId,
  cartId,
  userId,
  cart,
}) => {
  const submitOrder = () => {
    if (selectedAddressId) {
      updateCart(cartId, 'processing', selectedAddressId);
      createCart(userId);
      console.log('order submitted!');
    }
  };

  console.log(cart);

  return (
    <div style={{ width: '100%' }}>
      <Button
        onClick={() => {
          submitOrder();
        }}
        variant="contained"
        color="primary"
        style={{ width: '100%' }}
      >
        Place order
      </Button>
    </div>
  );
};

const mapStateToProps = ({ addresses, cart, user }) => {
  return {
    selectedAddressId: addresses.selectedAddressId,
    cartId: cart.id,
    userId: user.id,
    cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCart: (cartId, status, addressId) =>
      dispatch(updateUserCart(cartId, status, addressId)),
    createCart: userId => dispatch(createUserCart(userId, 'inCart')),
    getLineItems: cartId => dispatch(getLineItems(cartId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceOrder);
