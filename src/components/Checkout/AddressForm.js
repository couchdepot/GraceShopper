import React from 'react';
import { connect } from 'react-redux';

import { TextField, Button } from '@material-ui/core';

const AddressForm = ({ cartId, userId }) => {
  const [values, setValues] = React.useState({
    name: '',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    zipCode: '',
    state: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submitForm = () => {};

  console.log(cartId, userId);
  return (
    <form
      style={{
        display: 'flex',
        flewWrap: 'wrap',
        width: '100%',
        flexDirection: 'column',
      }}
    >
      <TextField
        label="Name"
        style={{ margin: '0 1rem' }}
        value={values.name}
        required
        onChange={handleChange('name')}
        margin="normal"
        style={{ width: '90%' }}
      />
      <TextField
        label="Address line 1"
        style={{ margin: '0 1rem' }}
        value={values.streetAddress1}
        required
        onChange={handleChange('streetAddress1')}
        margin="normal"
        style={{ width: '90%' }}
      />
      <TextField
        label="Address line 2"
        style={{ margin: '0 1rem' }}
        value={values.streetAddress2}
        onChange={handleChange('streetAddress2')}
        helperText="Apartment, unit, floor, etc."
        margin="normal"
        style={{ width: '90%' }}
      />
      <TextField
        label="City"
        style={{ margin: '0 1rem' }}
        value={values.city}
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
          value={values.state}
          onChange={handleChange('state')}
          margin="normal"
          style={{ width: '47%' }}
        />
        <TextField
          label="ZIP Code"
          style={{ margin: '0 1rem' }}
          required
          value={values.zipCode}
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
        <Button variant="contained" color="primary" style={{ width: '100px' }}>
          Save
        </Button>
      </div>
    </form>
  );
};

const mapStateToProps = ({ cart, user }) => {
  return {
    cartId: cart.id,
    userId: user.id,
  };
};

export default connect(mapStateToProps)(AddressForm);
