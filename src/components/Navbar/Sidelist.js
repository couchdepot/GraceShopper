import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
import Settings from '@material-ui/icons/SettingsOutlined';
import ListIcon from '@material-ui/icons/ListOutlined';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';



const Sidelist = ({ classes, user }) => {

  const [open, setOpen] = useState(false);

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
        
        {user.admin &&
        <Fragment>
          <ListItem button onClick={()=> setOpen(!open)}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText inset primary="Manage Store" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to='/admin/products'>
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText inset primary="Products" />
              </ListItem>
            </List>
          </Collapse>
        </Fragment>
        }
      </List>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Sidelist);
