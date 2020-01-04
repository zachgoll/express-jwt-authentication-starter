const mongoose = require('mongoose');
const router = require('express').Router();   
const User = mongoose.model('User');
const passport = require('passport');
const utils = require('../lib/utils');

// TODO
router.get('/protected', (req, res, next) => {
});

// TODO
router.post('/login', function(req, res, next){});

// TODO
router.post('/register', function(req, res, next){});

module.exports = router;