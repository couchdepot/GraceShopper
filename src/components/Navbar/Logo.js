import React from 'react';
import Typography from '@material-ui/core/Typography';

const red = '#f44336';
const blue = '#2196f3';
const amber = '#ffc107';
const green = '#4caf50';

const logo = ({ classes }) => {
  return (
    <a style={{ display: 'flex', textDecoration: 'none' }} href="/#/products">
      <Typography
        className={classes.title}
        style={{ color: blue }}
        variant="h6"
        noWrap
      >
        G
      </Typography>
      <Typography
        className={classes.title}
        style={{ color: red }}
        variant="h6"
        noWrap
      >
        r
      </Typography>
      <Typography
        className={classes.title}
        style={{ color: amber }}
        variant="h6"
        noWrap
      >
        a
      </Typography>
      <Typography
        className={classes.title}
        style={{ color: blue }}
        variant="h6"
        noWrap
      >
        c
      </Typography>
      <Typography
        className={classes.title}
        style={{ color: green }}
        variant="h6"
        noWrap
      >
        e
      </Typography>
      <Typography
        className={classes.title}
        variant="h6"
        style={{ color: 'grey', fontWeight: 'lighter' }}
        noWrap
      >
        Shopper
      </Typography>
    </a>
  );
};

export default logo;
