import React from 'react';
import { getOrders } from './reducers';
import { connect } from 'react-redux';

const Orders = ({ orders, products, lineItems, getUserOrders }) => {};

const mapStateToProps = ({ orders, products, lineItems }) => ({
  orders,
  products,
  lineItems,
});

const mapDispatchToProps = dispatch => ({
  getUserOrders: userId => dispatch(getOrders(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
