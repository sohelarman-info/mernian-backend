const express = require('express');
const registrationController = require('../../controller/auth/registrationController');
const route = express.Router();

route.get('/ragistration', registrationController);

route.get('/login', function (req, res) {
  res.send('this is login page');
});

module.exports = route;
