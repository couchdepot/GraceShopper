import React, { Component } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';

class Search extends Component {
  render() {
    const { classes } = this.props;
    return (
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
    );
  }
}

export default Search;
