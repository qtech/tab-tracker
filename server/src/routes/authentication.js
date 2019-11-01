const express = require('express');
const router = express.Router();
const AuthenticationController = require('../controllers/AuthenticationController');
const AuthenticationPolicy = require('../policies/AuthenticationPolicy');

router.post(
  '/register',
  AuthenticationPolicy.register,
  AuthenticationController.register
);

module.exports = router;
