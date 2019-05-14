const router = require('express').Router();
const {
  models: { Rating },
} = require('../db');

module.xports = router;

router.get('/', (req, res, next) => {
  return Rating.findAll()
    .then(ratings => res.send(ratings))
    .catch(next);
});

router.post('/', (req, res, next) => {
  return Rating.create(req.body)
    .then(rating => res.status(201).send(rating))
    .catch(next);
});
