const router = require('express').Router();
const {
  models: { Address },
} = require('../db');

module.exports = router;

// GET :/api/address/:userId
router.get('/:userId', (req, res, next) => {
  const { userId } = req.params;

  Address.findAll({ where: { userId } })
    .then(addresses => res.status(200).json(addresses))
    .catch(next);
});

// POST :/api/address/
router.post('/', (req, res, next) => {
  const { streetAddress, city, state, zipCode, userId, cartId } = req.body;

  Address.create({ streetAddress, city, state, zipCode, userId, cartId })
    .then(address => {
      res.status(201).json(address);
    })
    .catch(next);
});
