import React, { Component } from 'react';

// Material-UI Core
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

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
  };

  toggleDrawer = open => {
    this.setState({ drawerOpened: open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{
            boxShadow: 'none',
            background: 'white',
            borderBottom: 'lightGrey 1px solid',
            position: 'relative',
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
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <div className={classes.sectionDesktop}>
              <IconButton className={classes.IconButton}>
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
