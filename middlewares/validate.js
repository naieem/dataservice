const Joi = require('joi');

const loginSchema = Joi.object().keys({
    ItemId: Joi.string().required(),
    FirstName: Joi.string().alphanum().min(3).max(30).required(),
    LastName: Joi.string().min(3).max(20).required(),
    Email: Joi.string().email(),
    Age: Joi.number(),
    Tags: Joi.array()
}).with('ItemId', ['FirstName', 'LastName']);

// Return result.
// const result = Joi.validate({
//     username: 'abc',
//     birthyear: 1994
// }, schema);
// result.error === null -> valid

// You can also pass a callback which will be called synchronously with the validation result.
// Joi.validate({
//     username: 'abc',
//     birthyear: 1994
// }, schema, function (err, value) {}); // err === null -> valid

module.exports = {
    insert(req, res, next) {
        var result = Joi.validate(req.body, loginSchema);
        debugger;
        if (result && !result.error) {
            next();
        } else {
            res.send(500, {
                type: result.error.name,
                message: result.error.details[0].message
            });
        }
    }
}