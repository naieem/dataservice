var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    FirstName: String,
    LastName: String,
    Email: String
});

var user = mongoose.model('User', userSchema);

module.exports = user;