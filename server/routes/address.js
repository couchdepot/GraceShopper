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
  const {
    streetAddress,
    streetAddress2,
    city,
    state,
    zipCode,
    userId,
  } = req.body;

  Address.create({
    streetAddress,
    streetAddress2,
    city,
    state,
    zipCode,
    userId,
  })
    .then(address => {
      res.status(201).json(address);
    })
    .catch(next);
});
