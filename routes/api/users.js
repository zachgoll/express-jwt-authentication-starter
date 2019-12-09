var mongoose = require('mongoose');
var router = require('express').Router();   
var User = mongoose.model('User');

// http://localhost:3000/api/users/login
router.post('/users/login', function(req, res, next){

});

router.post('/users/register', function(req, res, next){

});

module.exports = router;