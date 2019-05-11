import React, { Component } from 'react';

import { Button } from '@material-ui/core';

class Login extends Component {
  render() {
    return (
      <a href="#/login" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: '1rem 0 1rem 1rem' }}
        >
          Sign in
        </Button>
      </a>
    );
  }
}

export default Login;

{
  /* <IconButton
            className={classes.IconButton}
            aria-owns={open ? 'menu-appbar' : undefined}
            aria-haspopup="true"
            onClick={() => {
              //   this.toggleProfile(!this.state.profileOpened);
            }}
          >
            <AccountCircle />
          </IconButton> */
}

{
  /* <div>
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
              </div> */
}
