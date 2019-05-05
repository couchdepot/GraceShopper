import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ProductsList } from './'

export default class App extends Component {
    render() {
        return (
            <div>
                "Hello World"
            <Router>
                    <Route path='/products' component={ProductsList} />
                </Router>
            </div>
        )
    }
}