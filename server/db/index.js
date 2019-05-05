const faker = require('faker');
const db = require('./db');
const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const Cart = require('./Cart');
const LineItem = require('./LineItem');

// Association
Product.belongsTo(Category);
Cart.belongsTo(User);
LineItem.belongsTo(Cart);
LineItem.belongsTo(Product);

// Class methods for creating fake model instances
// Creating fake users
User.createFakeUser = function() {
  return this.create({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    address: `${faker.address.streetAddress()}
      ${faker.address.city()}
      ${faker.address.stateAbbr()}
      ${faker.address.zipCode()}`,
    email: faker.internet.email(),
    password: '12345',
  });
};

User.createFakeUsers = function(count) {
  const users = [];
  while (users.length < count) {
    users.push(this.createFakeUser());
  }
  return users;
};

// Creating unique categories
Category.createFakeCategories = function(count) {
  const names = [];
  while (names.length < count) {
    const name = faker.commerce.department();
    if (!names.includes(name)) names.push(name);
  }
  return names.map(name => this.create({ name }));
};

// Creating fake product
Product.createFakeProduct = function(categoryId) {
  return this.create({
    name: faker.commerce.productName(),
    description: faker.lorem.paragraph(3),
    price: faker.finance.amount(50, 150, 2),
    quantity: 10,
    imageUrl: `${faker.image.image()}/${Math.floor(Math.random()*10)}`,
    categoryId,
  });
};

Product.createFakeProducts = function(count, categoryId) {
  const products = [];
  while (products.length < count) {
    products.push(this.createFakeProduct(categoryId));
  }
  return products;
};

const syncAndSeed = () => {
  return db
    .sync({ force: true })
    .then(() => Promise.all(User.createFakeUsers(3)))
    .then(users =>
      Promise.all(users.map(user => Cart.create({ userId: user.id })))
    )
    .then(() => Promise.all(Category.createFakeCategories(5)))
    .then(categories =>
      Promise.all(
        categories.map(category => Product.createFakeProducts(5, category.id))
      )
    )
    .then(() => console.log('Database is synced and seeded'))
    .catch(err => console.error(err));
};

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
