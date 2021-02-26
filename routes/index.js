const router = require('express').Router();

// Go to http://localhost:3000/status to make sure the API is running okay
router.get('/status', (req, res) => {
    res.send('The API is working');
});

router.use('/users', require('./users'));

module.exports = router;