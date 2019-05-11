import React from 'react';
import { connect } from 'react-redux';

import { IconButton, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';

const Cart = ({ classes, itemsInCart }) => {
  return (
    <IconButton className={classes.IconButton}>
      <Badge badgeContent={itemsInCart} color="secondary">
        <a href="#/cart" style={{ textDecoration: 'none', color: 'grey' }}>
          <ShoppingCartIcon />
        </a>
      </Badge>
    </IconButton>
  );
};

const mapStateToProps = ({ lineItems }) => {
  const itemsInCart = lineItems.reduce((sum, { quantity }) => {
    sum += quantity;
    return sum;
  }, 0);

  return {
    itemsInCart,
  };
};

export default connect(mapStateToProps)(Cart);
