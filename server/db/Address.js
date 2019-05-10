const Sequelize = require('sequelize');
const db = require('./db');

const Address = db.define('address', {
  streetAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  zipCode: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  fullAddress: {
      type: Sequelize.VIRTUAL,
      get () {
          return `
            ${this.getDataValue('streetAddress')}
            ${this.getDataValue('city')},
            ${this.getDataValue('state')}
            ${this.getDataValue('zipCode')}
            `
      }
  }
});

module.exports = Address;