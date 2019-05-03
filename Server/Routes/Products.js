const express = require('express')
const router = express.Router()
const Product = require('../db/Product')

router.get('/', (req, res, next) => {
    return Product.findAll()
        .then(products => res.send(products))
        .catch(next)
})

router.get('/:productId', (req, res, next) => {
    return Product.findByPk(req.params.productId)
        .then(product => res.send(product))
        .catch(next)
})

module.exports = router

