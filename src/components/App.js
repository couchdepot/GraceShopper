import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { ProductsList, Login, SingleProduct, ManageProducts, EditProduct } from './';
import Navbar from './Navbar';
import Cart from './Cart';

import {
  loginSession,
  getUsersCart,
  getProducts,
  getLineItems,
  getCategories,
} from '../reducers';

class App extends Component {
  componentDidMount() {
    const { user, loginSession, getProducts, getCategories } = this.props;
    Promise.all([getProducts(), loginSession(), getCategories()]);
  }

  componentDidUpdate(prevProps) {
    console.log(this.props);
    console.log(this.prevProps);
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
        <Route path="/" exact render={() => <Redirect to="/products" />} />
        <Route path="/login" exact component={Login} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/products" component={ProductsList} />
        <Route exact path="/category/:categoryId" component={ProductsList} />
        <Route path="/products/:productId" component={SingleProduct} />
        <Route path="/admin/products" component={ManageProducts} />
        <Route path="/admin/products/edit/:id?" component={EditProduct} />
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
