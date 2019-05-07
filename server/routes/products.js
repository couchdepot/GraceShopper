const router = require('express').Router();
const {
  models: { Product, Category },
} = require('../db');

module.exports = router;

// GET :/api/products
router.get('/', (req, res, next) => {
  return Product.findAll()
    .then(products => res.send(products))
    .catch(next);
});

// GET :/api/products/categories
router.get('/categories', (req, res, next) => {
  return Category.findAll()
    .then(categories => res.send(categories))
    .catch(next);
});

// GET :/api/products/categories/:category
router.get('/categories/:categoryId', (req, res, next) => {
  return Product.findAll({
    where: {
      categoryId: req.params.categoryId,
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
