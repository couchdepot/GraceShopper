const faker = require('faker');
const db = require('./db');
const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
// const Cart = require('./Cart');

// Association
Product.belongsTo(Category);
// Cart.belongsTo(User);

// Class methods for creating fake model instances
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

// need Class method for creating fake category and categories
Category.createFakeCategory = function() {
  return this.create({ name: faker.commerce.department() });
};

Category.createFakeCategories = function(count) {
  const categories = [];
  while (categories.length < count) {
    categories.push(this.createFakeCategory());
  }
  return categories;
};
// need Class method for creating fake product
Product.createFakeProduct = function(id) {
  return this.create({
    name: faker.commerce.productName(),
    description: faker.lorem.paragraph(4),
    price: 9.99,
    quantity: 10,
    imageUrl: faker.image.cats(),
    categoryId: id,
  });
};

Product.createFakeProducts = function(count, id) {
  const products = [];
  while (products.length < count) {
    products.push(this.createFakeProduct(id));
  }
  return products;
};

const syncAndSeed = () => {
  return (
    db
      .sync({ force: true })
      .then(() => Promise.all(User.createFakeUsers(3)))
      //map over users and create cart for each user (userId is user.id)
      .then(() => Promise.all(Category.createFakeCategories(5)))
      .then(categories =>
        Promise.all(
          categories.map(category =>
            Product.createFakeProducts(5, category.id)
          )
        )
      )
      .then(() => console.log('Database is synced and seeded'))
      .catch(err => console.error(err))
  );
};

syncAndSeed();

module.exports = { User, syncAndSeed };
