var express = require('express');
var router = express.Router();
var userModel = require('../models/user');


router.get('/', function(req, res, next) {
    res.send(200, {
        message: 'Hello api end point works'
    });
});


router.post('/insert', function(req, res, next) {
    var user = new userModel({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email
    });
    user.save(function name(err) {
        if (!err) {
            res.send(200, {
                message: 'user inserted succesfully'
            });
        } else {
            return handleError(err);
        }
    });
});

router.get('/getAll', function(req, res, next) {
    userModel.find(function(err, response) {
        if (!err) {
            res.send(200, {
                result: response
            });
        } else {
            handleError(err);
        }
    })
});


module.exports = router;