import React from 'react';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import QuantityDropdown from './QuantityDropdown';

const Product = () => {
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
      <img
        src="https://jetimages.jetcdn.net/md5/d3689eb6758f93e8745e4f9fb78bd529?odnBound=112"
        height="100px"
      />
      <div style={{ marginLeft: '2rem' }}>
        <Typography variant="subtitle1">
          Nestle Pure Life Splash Water
        </Typography>
        <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
          $12.48
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
