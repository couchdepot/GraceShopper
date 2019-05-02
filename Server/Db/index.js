const faker = require('faker');
const db = require('./db');
const User = require('./User');
// const Cart = require('./Cart');
// const Category = require('./Category');
// const Product = require('./Product');

// Association
// Cart.belongsTo(User);
// Product.belongsTo(Category);

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
// need Class method for creating fake product

const syncAndSeed = () => {
  return (
    db
      .sync({ force: true })
      .then(() => User.createFakeUsers(5))
      //map over users and create cart for each use userId is user.id
      //create some number of fake categories
      //map over catagories and create some number of fake products
      .then(() => console.log('Database is synced and seeded'))
      .catch(err => console.error(err))
  );
};

module.exports = { User, syncAndSeed };
