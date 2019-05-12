import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import {
  ProductsList,
  Login,
  SingleProduct,
  ManageProducts,
  EditProduct,
  AccessDenied,
  ManageCategories,
  Orders,
} from './';
import Navbar from './Navbar';
import Cart from './Cart';
import Checkout from './Checkout';

import {
  loginSession,
  getUsersCart,
  getProducts,
  getLineItems,
  lineItemsSession,
  getCategories,
  getUserAddresses,
} from '../reducers';

class App extends Component {
  componentDidMount() {
    const {
      loginSession,
      getProducts,
      getCategories,
      lineItemsSession,
    } = this.props;
    Promise.all([
      getProducts(),
      loginSession(),
      getCategories(),
      lineItemsSession(),
    ]);
  }

  componentDidUpdate(prevProps) {
    const {
      user,
      cart,
      getUsersCart,
      getLineItems,
      getUserAddresses,
    } = this.props;

    if (user.id && user.id !== prevProps.user.id) {
      Promise.all([getUsersCart(user.id, 'inCart'), getUserAddresses(user.id)]);
    }
    if (cart.id && cart.id !== prevProps.cart.id) {
      getLineItems(cart.id);
    }
  }

  render() {
    const { user } = this.props;

    return (
      <Router>
        <Navbar />
        <Route path="/" exact render={() => <Redirect to="/products" />} />
        <Route path="/orders" component={Orders} />
        <Route path="/login" exact component={Login} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/products" component={ProductsList} />
        <Route exact path="/category/:categoryId" component={ProductsList} />
        <Route path="/products/:productId" component={SingleProduct} />
        {user.admin ? (
          <Fragment>
            <Route path="/admin/products" exact component={ManageProducts} />
            <Route path="/admin/products/edit/:id?" component={EditProduct} />
            <Route path="/admin/categories" exact component={ManageCategories} />
          </Fragment>
        ) : (
          <Route path="/admin" component={AccessDenied} />
        )}
        <Route path="/checkout" component={Checkout} />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    cart: state.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsersCart: (userId, status) => dispatch(getUsersCart(userId, status)),
    getLineItems: cartId => dispatch(getLineItems(cartId)),
    loginSession: () => dispatch(loginSession()),
    getProducts: () => dispatch(getProducts()),
    getCategories: () => dispatch(getCategories()),
    getUserAddresses: userId => dispatch(getUserAddresses(userId)),
    lineItemsSession: () => dispatch(lineItemsSession()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
