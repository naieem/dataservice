var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentsSchema = new Schema({
    _id: String,
    Comments: String,
    Authorid: String
});

var comments = mongoose.model('Author', commentsSchema);

module.exports = comments;