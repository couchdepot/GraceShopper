import React from 'react';
import { connect } from 'react-redux';

import { Grid, Avatar, Fab } from '@material-ui/core';

const Profile = ({ user }) => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ cursor: 'pointer' }}
    >
      <Fab
        style={{
          width: '40px',
          height: '40px',
          margin: '1rem',
        }}
      >
        <Avatar
          alt={user.name}
          src={user.imageUrl}
          style={{ width: '100%', height: '100%' }}
        />
      </Fab>
    </Grid>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Profile);
