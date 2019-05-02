const Sequilize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
  firstName: {
    type: Sequilize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequilize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  address: {
    type: Sequilize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequilize.STRING,
    allowNull: false,
    unique: { msg: 'Email must be unique' },
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  password: {
    type: Sequilize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [5, 12],
    },
  },
  admin: {
    type: Sequilize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = User;
