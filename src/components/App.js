import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ProductsList, Login, SingleProduct } from './';
import Navbar from './Navbar';

export default class App extends Component {
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
