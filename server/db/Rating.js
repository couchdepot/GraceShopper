const Sequelize = require('sequelize');
const db = require('./db');

const Rating = db.define('rating', {
  rating: {
    type: Sequelize.DECIMAL(10, 1),
    defaultValue: 3.0,
  },
});

module.exports = Rating;
