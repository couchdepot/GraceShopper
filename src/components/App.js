import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ProductsList, Login, SingleProduct } from './';
import Navbar from './Navbar';
import { loginSession, getUsersCart } from '../reducers';

class App extends Component {
  componentDidMount() {
    this.props.loginSession();
  }

  componentDidUpdate(prevProps) {
    const { user, getUsersCart } = this.props;
    if (user.id !== prevProps.user.id) getUsersCart(user.id, 'inCart');
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Route path="/login" exact component={Login} />
        <Route exact path="/products" component={ProductsList} />
        <Route path="/products/:productId" component={SingleProduct} />
      </Router>
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
