const db = require('./db');
const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const Cart = require('./Cart');
const LineItem = require('./LineItem');
const syncAndSeed = require("./seed")

// Association
Product.belongsTo(Category);
Cart.belongsTo(User);
LineItem.belongsTo(Cart);
LineItem.belongsTo(Product);


module.exports = {
  syncAndSeed,
  models: {
    User,
    Category,
    Product,
    Cart,
    LineItem,
  },
};
