var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    _id: String,
    FirstName: String,
    LastName: String,
    Email: String,
    Age: Number,
    Tags: Array
});

var user = mongoose.model('User', userSchema);

module.exports = user;