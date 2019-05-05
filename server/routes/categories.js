const router = require('express').Router();
const Category = require('../db/Product');

module.exports = router;

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