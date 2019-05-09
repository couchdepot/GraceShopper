import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import { updateLineItem } from '../../reducers/index';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class QuantityDropdown extends Component {
  state = {
    quantity: this.props.quantity || 1,
  };

  onSelectChange = evt => {
    const { lineItemId, updateLineItem, cartId } = this.props;
    this.setState({ quantity: evt.target.value }, () => {
      updateLineItem(lineItemId, cartId, this.state);
    });
  };

  render() {
    const { classes, lineItemId } = this.props;
    return (
      <form
        className={classes.root}
        autoComplete="off"
        style={{ marginLeft: '2rem' }}
      >
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="quantity-simple">Quantity</InputLabel>
          <Select
            onChange={this.onSelectChange}
            value={this.state.quantity}
            style={{ textAlign: 'center' }}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

export default connect(
  null,
  { updateLineItem }
)(withStyles(styles)(QuantityDropdown));
