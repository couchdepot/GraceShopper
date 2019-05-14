const Sequelize = require('sequelize');
// const db = new Sequelize(
//   process.env.DATABASE_URL || 'postgres://localhost:5432/grace_shopperDb',
//   { logging: false }
// );

// For cloud9 db
const db = new Sequelize('grace_shopperDb', 'ubuntu', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

module.exports = db;
