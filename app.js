var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var validator = require('express-validator');
var mongoStore = require('connect-mongo')(session);
// my own
var expresshsb = require('express-handlebars');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {
  useNewUrlParser: true
}, (err) => {
  if (err)
    console.log('Unable to connect to MongoDB');
});
require('./config/passport');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');

var app = express();

// view engine setup
app.engine('.hbs', expresshsb({
  defaultLayout: 'layout',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(validator());
app.use(cookieParser());
app.use(session({
  secret: 'mysupersecret',
  resave: false,
  saveUninitialized: false,
  store : new mongoStore({mongooseConnection:mongoose.connection}),
  cookie:{maxAge:40*10*1000}
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
});

app.use('/user', express.static(path.join(__dirname, 'public')), userRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
app.listen('3000', () => {
  console.log('Server has Started');
});