const Sequelize = require('sequelize');
const db = require('./db');

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validation: {
            notEmpty: true
        }
    },
    description: Sequelize.TEXT,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validation: {
            notEmpty: true
        }
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validation: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'http://lorempixel.com/640/480/abstract/1'
    }
});

module.exports = Product;
