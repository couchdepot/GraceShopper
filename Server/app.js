const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const { auth } = require('./Routes');

// Body parsing middleware
app.use(express.json());

// Session middleware
app.use(session({
  secret: 'secret string',
  resave: false,
  saveUninitialized: false,
}))

// Authentication router
app.use('auth', auth);


app.get('/app.js', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'dist', 'main.js')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));


// Handle 404s
app.use((req, res, next) => {
  const err = new Error('Not Found!');
  err.status = 404;
  next(err);
})

// Error handling endware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message || 'Server error!')
})

module.exports = app;



