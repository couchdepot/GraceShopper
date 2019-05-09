import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';

import { updateLineItem } from '../../reducers';

class QuantitySetter extends Component {
  state = {
    quantity: this.props.lineItem.quantity || 1,
  };

  onPlusMinus = num => {
    const { lineItem } = this.props;

    this.setState(
      prevState => {
        return {
          quantity: prevState.quantity + num,
        };
      },
      () => {
        lineItem.quantity = this.state.quantity;
        this.props.updateLineItem(lineItem);
      }
    );
  };

  render() {
    const { quantity } = this.state;
    const { onPlusMinus } = this;
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Fab
          color="primary"
          style={{ marginLeft: '10px' }}
          onClick={() => onPlusMinus(1)}
        >
          <AddIcon />
        </Fab>
        <TextField
          id="outlined-number"
          label="Quantity"
          value={quantity}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
          style={{
            maxWidth: '60px',
            marginLeft: '1rem',
            marginRight: '0.5rem',
          }}
        />
        <Fab
          color="secondary"
          style={{ marginLeft: '10px' }}
          onClick={() => {
            if (quantity > 1) onPlusMinus(-1);
          }}
        >
          <RemoveIcon />
        </Fab>
      </div>
    );
  }
}

export default connect(
  null,
  { updateLineItem }
)(QuantitySetter);
