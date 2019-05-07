import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ProductsList, Login, SingleProduct } from './';
import Navbar from './Navbar';
import Cart from './Cart';

import {
  loginSession,
  getUsersCart,
  getProducts,
  getLineItems,
} from '../reducers';

class App extends Component {
  componentDidMount() {
    const { loginSession, getProducts } = this.props;
    Promise.all([loginSession(), getProducts()]);
  }

  componentDidUpdate(prevProps) {
    const { user, cart, getUsersCart, getLineItems } = this.props;
    if (user.id !== prevProps.user.id) {
      getUsersCart(user.id, 'inCart');
    }
    if (cart.id !== prevProps.cart.id) {
      getLineItems(cart.id);
    }
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Route path="/login" exact component={Login} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/products" component={ProductsList} />
        <Route path="/products/:productId" component={SingleProduct} />
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
