const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

/**
 *  This function will look in routes folder and require all the files except the index.js file
 *  and then attach it to the express.Router() instance to be available as an endpoint.
 */
fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(filteredFile => {
    router.use(require(path.join(__dirname, filteredFile)));
  });

// Base routes to be used for pinging, status and other things.
router.get('/', (req, res) => {
  res.send({
    message: 'This is the root route for api'
  });
});

// Route to test if server is alive or not!
router.get('/ping', (req, res) => {
  res.status(200).send({
    message: 'Everything is working good!!'
  });
});

module.exports = router;
