var createError = require('http-errors');
var express = require('express');
const session = require('express-session');
const passport = require('passport');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var todoListRouter = require('./routes/todolist');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: '1028',
  cookie: { maxAge: 60 * 60 * 1000 },
  resave: true,
  saveUninitialized: false
}));
app.use(passport.initialize()); // passport 구동
app.use(passport.session()); // 세션 연결

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todolist', todoListRouter);

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
