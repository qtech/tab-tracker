const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email} Your account was registered!`
  });
});

module.exports = router;
