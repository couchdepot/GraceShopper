const router = require('express').Router();
const Op = require('sequelize').Op;
module.exports = router;

const {
  models: { Cart },
} = require('../db');

//GET :/api/orders/:userId
router.get('/:userId', (req, res, next) => {
  const { userId } = req.params;
  return Cart.findAll({
    where: {
      userId,
      status: { [Op.or]: ['processing', 'shipped', 'delivered'] },
    },
  }).then(orders => res.status(200).json(orders));
});
