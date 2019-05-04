const router = require('express').Router();
module.exports = router;

const { LineItem } = require('../db').models;

// POST :/api/lineItems
router.post('/', (req, res, next) => {
  const { productId, quantity, cartId } = req.body;

  LineItem.create({ productId, quantity, cartId })
    .then(lineitem => {
      res.status(201).json(lineitem);
    })
    .catch(next);
});

// GET :/api/lineItems/:cartId
router.get('/:cartId', (req, res, next) => {
  const { cartId } = req.params;
  LineItem.findAll({ where: { cartId } })
    .then(lineItems => res.status(200).json(lineItems))
    .catch(next);
});

// PUT :/api/lineItems/:lineItemId
router.put('/:lineItemId', (req, res, next) => {
  const { lineItemId } = req.params;
  const { quantity } = req.body;
  LineItem.findByPk(lineItemId)
    .then(lineItem => lineItem.update(quantity))
    .then(newLineItem => res.status(204).json(newLineItem))
    .catch(next);
});

// DELETE :/api/lineItems/:lineItemId
router.delete('/:lineItemId', (req, res, next) => {
  const { lineItemId } = req.params;
  LineItem.destroy({ where: { id: lineItemId } })
    .then(() => res.sendStatus(204))
    .catch(next);
});
