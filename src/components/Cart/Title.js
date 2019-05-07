import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Title = () => {
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
          $27.99
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

export default Title;
