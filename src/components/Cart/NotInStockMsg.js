import React from 'react';
import Typography from '@material-ui/core/Typography';

const NotInStockMsg = () => {
  return (
    <div
      style={{
        backgroundColor: 'cornsilk',
        padding: '1.5rem 1rem',
        margin: '1rem 0',
      }}
    >
      <Typography variant="subtitle1">3 items aren't in stock</Typography>
    </div>
  );
};

export default NotInStockMsg;
