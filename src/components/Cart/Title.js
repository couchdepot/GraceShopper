import React from 'react';

import { connect } from 'react-redux';
import { mapArrByProps, filterArrByKey } from '../../util';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EmptyCart from './EmptyCart';

const Title = ({ numberOfItemsInCart, subTotal, user }) => {
  if (!numberOfItemsInCart) return <EmptyCart />;

  console.log(user);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h4">Cart</Typography>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle1">Subtotal: </Typography>
        <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
          ${subTotal}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginLeft: '1rem' }}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ lineItems, products, user }) => {
  const productsInCart = lineItems.map(lineItem => {
    lineItem.productInfo = products.find(product => {
      return product.id === lineItem.productId;
    });
    return lineItem;
  });

  const subTotal = productsInCart.length
    ? productsInCart.reduce((sum, { quantity, productInfo: { price } }) => {
        sum += quantity * price;
        return sum;
      }, 0)
    : 0;
  return {
    subTotal: subTotal.toFixed(2),
    numberOfItemsInCart: productsInCart.length,
    user,
  };
};

export default connect(mapStateToProps)(Title);
