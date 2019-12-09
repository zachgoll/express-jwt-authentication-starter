var router = require('express').Router();

// Use http://localhost:3000/api/ as the users route
router.use('/', require('./users'));

module.exports = router;