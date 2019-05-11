const router = require('express').Router();
const {
  models: { Address },
} = require('../db');

module.exports = router;

// GET :/api/address/:userId
// router.get('/:userId', (req, res, next) => {
//   const { userId } = req.params;

//   Address.findAll({ where: { userId } }).then(
//       addresses=> res.status()
//   )
// });
