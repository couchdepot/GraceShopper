const express = require('express');
const router = express.Router();
const { User } = require('../Db');


// To login
router.post('/', (req, res, next) => {
  User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
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
    .catch(next)
});

//To logout
router.delete('/', (req, res, next) => {
  req.session.destroy(() => res.sendStatus(204));
});

//Return the currently logged in user
router.get('/', (req, res, next) => {
  if (!req.session.user) {
    const error = new Error('Not logged in')
    error.status = 401;
    return next(error);
  }
  res.send(req.session.user);
})

module.exports = router;

