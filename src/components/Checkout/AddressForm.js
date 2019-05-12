import React from 'react';
import { connect } from 'react-redux';

import { TextField, Button } from '@material-ui/core';
import { createAddress } from '../../reducers';

class AddressForm extends React.Component {
  // const [values, setValues] = React.useState({
  // });

  state = {
    streetAddress: '',
    streetAddress2: '',
    city: '',
    zipCode: '',
    state: '',
  };

  handleChange = name => event => {
    console.log(event.target.value);
    // this.setState(prevState => {
    //   return { ...prevState, [name]: event.target.value };
    // });
  };

  componentDidMount() {
    if (!this.props.address.streetAddress2)
      this.setState({ ...this.props.address, streetAddress2: '' });
    else this.setState({ ...this.props.address });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.address !== this.props.address) {
      if (!this.props.address.streetAddress2)
        this.setState({ ...this.props.address, streetAddress2: '' });
      else this.setState({ ...this.props.address });
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();

    // const {} = this.props;
    // createAddress(userId, values);
  };

  // console.log('state', thisState);
  // console.log('address', streetAddress);
  render() {
    const { handleChange, handleFormSubmit } = this;
    const { streetAddress, streetAddress2, city, zipCode, state } = this.state;
    return (
      <form
        style={{
          display: 'flex',
          flewWrap: 'wrap',
          width: '100%',
          flexDirection: 'column',
        }}
        onSubmit={handleFormSubmit}
      >
        <TextField
          label="Address line 1"
          style={{ margin: '0 1rem' }}
          value={streetAddress}
          required
          onChange={handleChange('streetAddress')}
          margin="normal"
          style={{ width: '90%' }}
        />
        <TextField
          label="Address line 2"
          style={{ margin: '0 1rem' }}
          value={streetAddress2}
          onChange={handleChange('streetAddress2')}
          helperText="Apartment, unit, floor, etc."
          margin="normal"
          style={{ width: '90%' }}
        />
        <TextField
          label="City"
          style={{ margin: '0 1rem' }}
          value={city}
          required
          onChange={handleChange('city')}
          margin="normal"
          style={{ width: '90%' }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '90%',
          }}
        >
          <TextField
            label="State"
            style={{ margin: '0 1rem' }}
            required
            value={state}
            onChange={handleChange('state')}
            margin="normal"
            style={{ width: '47%' }}
          />
          <TextField
            label="ZIP Code"
            style={{ margin: '0 1rem' }}
            required
            value={zipCode}
            onChange={handleChange('zipCode')}
            margin="normal"
            style={{ width: '47%' }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '90%',
            marginTop: '1rem',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            style={{ width: '100px' }}
          >
            Save
          </Button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartId: state.cart.id,
    userId: state.user.id,
    address: state.addresses[0] || {},
    state,
  };
};

export default connect(
  mapStateToProps,
  { createAddress }
)(AddressForm);
