import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ProductsList, Login } from './';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/login" exact component={Login} />
        <Route path="/products" component={ProductsList} />
      </Router>
    );
  }
}
