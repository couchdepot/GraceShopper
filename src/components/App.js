import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ProductsList, Login, SingleProduct } from './';
import Navbar from './Navbar';
import { loginSession, getUsersCart, getProducts } from '../reducers';

class App extends Component {
  componentDidMount() {
    Promise.all([this.props.loginSession(), this.props.getProducts()]);
  }

  componentDidUpdate(prevProps) {
    const { user, getUsersCart } = this.props;
    if (user.id !== prevProps.user.id)
      Promise.all([getUsersCart(user.id, 'inCart'), this.props.getProducts()]);
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Navbar />
          <Route path="/login" exact component={Login} />
          <Route exact path="/products" component={ProductsList} />
          <Route path="/products/:productId" component={SingleProduct} />
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsersCart: (userId, status) => dispatch(getUsersCart(userId, status)),
    loginSession: () => dispatch(loginSession()),
    getProducts: () => dispatch(getProducts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
