const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://images.dailykos.com/images/479822/story_image/unnamed.jpg?1512326578',
    validate: {
      isUrl: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: { msg: 'Email must be unique' },
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [5, 12],
    },
  },
  admin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
    fullName: {
    type: Sequelize.VIRTUAL,
    get() {
      return `${this.getDataValue('firstName')} ${this.getDataValue('lastName')}`;
    },
  },
});

module.exports = User;
