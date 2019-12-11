const mongoose = require('mongoose');
const router = require('express').Router();   
const User = mongoose.model('User');
const passport = require('passport');
const utils = require('../lib/utils');

router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.send('yes');
});

// Validate an existing user and issue a JWT
router.post('/login', function(req, res, next){

    User.findOne({ username: req.body.username })
        .then((user) => {

            if (!user) {
                res.status(401).json({ success: false, msg: "could not find user" });
            }
            
            // Function defined at bottom of app.js
            const isValid = utils.validPassword(req.body.password, user.hash, user.salt);
            
            if (isValid) {

                res.status(200).json({ "success": true, "token": utils.issueJWT(user) });

            } else {

                res.status(401).json({ success: false, msg: "you entered the wrong password" });

            }

        })
        .catch((err) => {   
            next(err);
        });
});

// Register a new user
router.post('/register', function(req, res, next){
    const saltHash = utils.genPassword(req.body.password);
    
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        username: req.body.username,
        hash: hash,
        salt: salt
    });

    try {
    
        newUser.save()
            .then((user) => {
                res.json({ success: true, user: user });
            });

    } catch (err) {
        
        res.json({ success: false, msg: err });
    
    }

});

module.exports = router;