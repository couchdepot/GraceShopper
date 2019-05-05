import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Login from './Login';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/login" exact component={Login} />
      </Router>
    );
  }
}
