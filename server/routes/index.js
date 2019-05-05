const router = require('express').Router();
module.exports = router;

// :/api/auth
router.use('/auth', require('./auth'));

// :/api/products
router.use('/products', require('./products'));

// :/api/carts
router.use('/carts', require('./carts'));

// :/api/lineItems
router.use('/lineItems', require('./lineItems'));

// Handle 404s
router.use((req, res, next) => {
  res.status(404).send('Not Found!');
});
