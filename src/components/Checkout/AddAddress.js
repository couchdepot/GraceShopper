import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/EditOutlined';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutline';

import { updateAddress, removeAddress } from '../../reducers';

class AddAddress extends Component {
  state = {
    selectedAddressId: '',
  };

  handleRadioChange = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  render() {
    const {
      userAddresses,
      removeAddress,
      openEditForm,
      openCreateForm,
    } = this.props;
    const { selectedAddressId } = this.state;
    const { handleRadioChange } = this;
    return (
      <div style={{ width: '100%' }}>
        <RadioGroup
          name="selectedAddressId"
          value={selectedAddressId}
          onChange={handleRadioChange}
          style={{ width: '100%' }}
        >
          {userAddresses.map(
            ({
              id,
              streetAddress,
              streetAddress2,
              city,
              state,
              zipCode,
              userId,
            }) => (
              <div
                key={id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '95%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    paddingLeft: '5px',
                  }}
                >
                  <Radio
                    checked={selectedAddressId === String(id)}
                    onChange={handleRadioChange}
                    value={String(id)}
                    name="selectedAddressId"
                  />
                  <Typography variant="subtitle1">{`${streetAddress}${
                    streetAddress2 ? ' ' + streetAddress : ''
                  }, ${city}, ${state} ${zipCode}`}</Typography>
                </div>
                <EditIcon
                  style={{
                    color: 'grey',
                    cursor: 'pointer',
                    paddingBottom: '5px',
                  }}
                  onClick={() => {
                    openEditForm(id);
                  }}
                />
                <RemoveIcon
                  style={{
                    color: 'crimson',
                    cursor: 'pointer',
                    paddingBottom: '5px',
                  }}
                  onClick={() => {
                    removeAddress(id, userId);
                  }}
                />
              </div>
            )
          )}
        </RadioGroup>
        <Button
          color="primary"
          style={{ margin: '1rem', paddingLeft: '1rem' }}
          onClick={openCreateForm}
        >
          Add new address
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({
  addresses: { userAddresses, selectedAddress },
}) => ({
  userAddresses,
  selectedAddress,
});

const mapDispatchToProps = dispatch => {
  return {
    removeAddress: (addressId, userId) =>
      dispatch(removeAddress(addressId, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAddress);
