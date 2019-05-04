const router = require('express').Router();
const Product = require('../db/Product');

module.exports = router;

// GET :/api/products
router.get('/', (req, res, next) => {
  return Product.findAll()
    .then(products => res.send(products))
    .catch(next);
});

// GET :/api/products/category/:category
router.get('/category/:category', (req, res, next) => {
  return Product.findAll({
    where: {
      category: req.params.category,
    },
  })
    .then(products => res.send(products))
    .catch(next);
});

// GET :/api/products/:productId
router.get('/:productId', (req, res, next) => {
  return Product.findByPk(req.params.productId)
    .then(product => res.send(product))
    .catch(next);
});
