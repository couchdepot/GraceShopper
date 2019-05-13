import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import SingleOrder from './SingleOrder';

const Orders = ({
  currentOrders,
  pastOrders,
  products,
  userAddresses,
  user,
  history,
}) => {
  return (
    <div
      style={{
        width: 'auto',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '80px',
      }}
    >
      <Typography variant="h3" align="center">
        Your Orders
      </Typography>
      <Typography variant="h4">Open Orders</Typography>
      {user.id ? (
        currentOrders.map(order => {
          const address = userAddresses.find(
            addy => addy.id === order.addressId
          );
          return (
            <SingleOrder
              key={order.id}
              order={order}
              address={address}
              products={products}
              history={history}
            />
          );
        })
      ) : (
        <Typography varient="h5">
          Please login to view your open orders
        </Typography>
      )}
      <Typography variant="h4">past Orders</Typography>
      {pastOrders.map(order => {
        const address = userAddresses.find(addy => addy.id === order.addressId);
        return (
          <SingleOrder
            key={order.id}
            order={order}
            address={address}
            products={products}
            history={history}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = ({
  user,
  currentOrders,
  pastOrders,
  products,
  addresses,
}) => {
  return {
    user,
    currentOrders,
    pastOrders,
    products,
    userAddresses: addresses.userAddresses,
  };
};

export default connect(mapStateToProps)(Orders);
