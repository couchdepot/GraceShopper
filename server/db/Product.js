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
        defaultValue: 'http://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/10/cat.jpg'
    }
});

module.exports = Product;
