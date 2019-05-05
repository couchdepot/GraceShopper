import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

const root = document.querySelector('#root');
const theme = createMuiTheme({
  palette: {
    common: {
      white: grey[50],
      grey: grey[500],
      lightGrey: grey[200],
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  root
);
