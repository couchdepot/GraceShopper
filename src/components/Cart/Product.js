import React from 'react';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import QuantityDropdown from './QuantityDropdown';

// key={id} price={price} name={name} imageUrl={imageUrl}

const Product = ({ lineItemId, price, name, imageUrl }) => {
  return (
    <div
      style={{
        heigth: '200px',
        borderTop: '1px solid lightGrey',
        borderBottom: '1px solid lightGrey',
        padding: '1rem 0',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <a href={`#/products/${lineItemId}`}>
        <img src={imageUrl} height="100px" />
      </a>
      <div style={{ marginLeft: '2rem' }}>
        <Typography variant="subtitle1">{name}</Typography>
        <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
          ${price}
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <QuantityDropdown />
        <Button color="secondary" style={{ margin: '1rem' }}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(Product);
