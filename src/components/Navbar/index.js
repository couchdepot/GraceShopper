import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI Core
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Material-UI Icons
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Logo from './Logo';
import styles from './styles';
import Sidelist from './Sidelist';

class Navbar extends Component {
  state = {
    drawerOpened: false,
    profileOpened: false,
  };

  toggleDrawer = open => {
    this.setState({ drawerOpened: open });
  };

  toggleProfile = open => {
    this.setState({ profileOpened: open });
  };

  render() {
    const { classes, itemsInCart } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          style={{
            boxShadow: 'none',
            background: 'white',
            borderBottom: 'lightGrey 1px solid',
            zIndex: 1400,
          }}
        >
          <SwipeableDrawer
            open={this.state.drawerOpened}
            onClose={() => {
              this.toggleDrawer(false);
            }}
            onOpen={() => {
              this.toggleDrawer(true);
            }}
          >
            <div
              tabIndex={0}
              role="button"
              onKeyDown={() => {
                this.toggleDrawer(true);
              }}
            >
              <Sidelist classes={classes} />
            </div>
          </SwipeableDrawer>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              style={{ color: 'grey' }}
              aria-label="Open drawer"
              onClick={() => {
                this.toggleDrawer(!this.state.drawerOpened);
              }}
            >
              <MenuIcon />
            </IconButton>
            <Logo classes={classes} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon style={{ color: 'grey' }} />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <IconButton className={classes.IconButton}>
              <Badge badgeContent={itemsInCart} color="secondary">
                <a
                  href="#/cart"
                  style={{ textDecoration: 'none', color: 'grey' }}
                >
                  <ShoppingCartIcon />
                </a>
              </Badge>
            </IconButton>
            <div className={classes.sectionDesktop}>
              <a href="#/login">
                <IconButton
                  className={classes.IconButton}
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={() => {
                    this.toggleProfile(!this.state.profileOpened);
                  }}
                >
                  <AccountCircle />
                </IconButton>
              </a>
              {/* <div>
                <Menu
                  id="menu-appbar"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={this.state.profileOpened}
                  onClose={() => {
                    this.toggleProfile(false);
                  }}
                  style={{ top: '50px' }}
                >
                  <MenuItem style={{ height: '100px' }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://material-ui.com/static/images/avatar/1.jpg"
                      style={{ margin: 10, width: 60, height: 60 }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginLeft: '1rem',
                      }}
                    >
                      <Typography variant="subtitle2">Foo Bar</Typography>
                      <Typography variant="caption">
                        fooBar123@gmail.com
                      </Typography>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        className={classes.button}
                        onClick={() => {
                          console.log('clicked');
                        }}
                      >
                        Logout
                      </Button>
                    </div>
                  </MenuItem>
                </Menu>
              </div> */}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = ({ lineItems = [] }) => ({
  itemsInCart: lineItems.length,
});

export default connect(mapStateToProps)(withStyles(styles)(Navbar));
