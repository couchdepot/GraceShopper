const Sequelize = require('sequelize');
const db = require('./db');

const Cart = db.define('cart', {
  status: {
    type: Sequelize.ENUM('inCart', 'processing', 'shipped', 'delivered'),
    allowNull: false,
    defaultValue: 'inCart',
  },
});

module.exports = Cart;
