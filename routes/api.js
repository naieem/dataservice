var express = require('express');
var router = express.Router();
var apiController = require('../controllers/api.controller');
var dataGeneratorController = require('../controllers/datagenerator.controller');
var validator = require('../middlewares/validate');

router.get('/', function(req, res, next) {
    res.send(200, {
        message: 'Hello api end point works'
    });
});


router.post('/insert', validator.insert, function(req, res, next) {
    apiController.insert(req).then(function(response) {
        debugger;
        res.send(200, response);
    }, function(error) {
        res.send(error);
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

router.get('/generateData', function(req, res, next) {
    dataGeneratorController.generateData().then((response) => {
        debugger;
        res.send(200, response);
    }, (error) => {
        res.send(500, error);
    });
});


module.exports = router;