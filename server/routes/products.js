const router = require('express').Router();
const {
  models: { Product, Category },
} = require('../db');

module.exports = router;

// GET :/api/products
router.get('/', (req, res, next) => {
  return Product.findAll({order:[['id']]})
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

// DELETE :/api/products/:productId
router.delete('/:productId', (req, res, next) => {
  Product.destroy({ where: { id: req.params.productId } })
    .then(() => res.sendStatus(204))
    .catch(next);
});

// PUT :/api/products/:productId
router.put('/:productId', (req, res, next) => {
  Product.findByPk(req.params.productId)
    .then(product => product.update(req.body))
    .then(product => res.status(201).send(product))
    .catch(next)
});

// POST :/api/products
router.post('/', (req, res, next) => {
  return Product.create(req.body)
    .then(product => res.status(201).send(product))
    .catch(next)
});


