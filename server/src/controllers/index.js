const express = require('express');
const router = express.Router();

// Other routes to be defined here using router.use('/prefix', require('file'));
router.use('/auth', require('./authentication'));

// Base routes to be used for pinging, status and other things.
router.get('/', (req, res) => {
  res.send({
    message: 'This is the root route for api'
  });
});

// Route to test if server is alive or not!
router.get('/status', (req, res) => {
  res.send({
    message: 'Hello World'
  });
});

module.exports = router;
