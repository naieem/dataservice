var log = require('../log/log');
var faker = require('faker');
var userModel = require('../models/user');
module.exports = {
    insert: function(req) {
        var user = new userModel({
            _id: req.body.ItemId,
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Age: req.body.Age,
            Tags: req.body.Tags
        });
        return new Promise((resolve, reject) => {
            userModel.where({
                'FirstName': req.body.FirstName
            }).count((err, count) => {
                debugger;
                if (!count) {
                    user.save((err) => {
                        debugger;
                        if (!err) {
                            resolve({
                                message: 'user inserted succesfully'
                            });
                        } else {
                            reject(err);
                        }
                    });
                } else {
                    resolve({
                        message: 'user already exists'
                    });
                }
            });
        });
    },
    generateData: function() {
        log.setLevel('info');
        log.isInfo('Fake information generation starts');
        var datas = [];
        for (let index = 0; index < 50; index++) {
            datas.push(new userModel({
                _id: faker.random.uuid(),
                FirstName: faker.name.firstName(),
                LastName: faker.name.lastName(),
                Email: faker.internet.email(),
                Age: faker.random.number(100),
                Tags: [faker.lorem.word(), faker.lorem.word()]
            }));
        }
        log.info('Fake information generation ends');
        log.info('started to save fake data');
        debugger;
        return new Promise((resolve, reject) => {
            userModel.insertMany(datas, function(err) {
                debugger;
                if (!err) {
                    log.info('saving fake data ends succesfully');
                    resolve({
                        message: 'Data saving succesfull'
                    });
                } else {
                    log.info('saving fake data ends error');
                    reject(err);
                }
            });
        });
    }
}