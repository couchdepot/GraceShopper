import React from 'react';

// Material-UI Core
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// // Material-UI Icons
import History from '@material-ui/icons/History';
import Store from '@material-ui/icons/StoreOutlined';
import Departments from '@material-ui/icons/BorderAll';
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';

const Sidelist = ({ classes }) => {
  return (
    <div style={{ width: 250 }}>
      <List style={{ top: '64px' }}>
        <ListItem button>
          <a href="/#/cart" style={{ textDecoration: 'none', display: 'flex' }}>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Shopping Cart" />
          </a>
        </ListItem>
        <ListItem button>
          <a href="/" style={{ textDecoration: 'none', display: 'flex' }}>
            <ListItemIcon>
              <Store />
            </ListItemIcon>
            <ListItemText primary="Stores" />
          </a>
        </ListItem>
        <ListItem button>
          <a href="/" style={{ textDecoration: 'none', display: 'flex' }}>
            <ListItemIcon>
              <Departments />
            </ListItemIcon>
            <ListItemText primary="Departments" />
          </a>
        </ListItem>
        <ListItem button>
          <a href="/" style={{ textDecoration: 'none', display: 'flex' }}>
            <ListItemIcon>
              <History />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </a>
        </ListItem>
        <ListItem button>
          <a href="#/login" style={{ textDecoration: 'none', display: 'flex' }}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </a>
        </ListItem>
      </List>
    </div>
  );
};

export default Sidelist;
