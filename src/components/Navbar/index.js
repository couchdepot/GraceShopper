import React, { Component } from 'react';

// Material-UI Core
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/ToolBar';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

// Material-UI Icons
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';

import Logo from './Logo';
import styles from './styles';

class Navbar extends Component {
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
          }}
        >
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              style={{ color: 'grey' }}
              aria-label="Open drawer"
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
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton className={classes.IconButton}>
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton className={classes.IconButton}>
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton className={classes.IconButton}>
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
