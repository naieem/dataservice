var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dataservice');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// ----------- route files start ------------------ //
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
// ----------- route files ends ------------------- //
// ---------------------- mongo connection checking ----------------- //
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('------------------------------------');
    console.log('mongodb connected');
    console.log('------------------------------------');
});
// ---------------------- mongo connection checking ends ------------ //
var app = express();
var cors = require('cors');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;