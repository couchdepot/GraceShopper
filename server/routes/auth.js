const router = require('express').Router();
const { User } = require('../db');

module.exports = router;

// POST :/api/auth
// To login
router.post('/', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  })
    .then(user => {
      if (!user) {
        const error = new Error('Incorrect email or password');
        error.status = 401;
        throw error;
      }
      req.session.user = user;
      res.send(user);
    })
    .catch(next);
});

// DELETE :/api/auth
//To logout
router.delete('/', (req, res, next) => {
  req.session.destroy(() => res.sendStatus(204));
});

// GET :/api/auth
//Return the currently logged in user
router.get('/', (req, res, next) => {
  if (!req.session.user) {
    const error = new Error('Not logged in');
    error.status = 401;
    return next(error);
  }
  res.send(req.session.user);
});

module.exports = router;
