const bodyparser = require("body-parser");

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var projectsRouter = require('./routes/projects');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// test
app.use(bodyparser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/projects', projectsRouter);

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

// /* TEST */
// const mysql = require("mysql");

// var mysqlConnection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "coveocommunitydb"
// });

// mysqlConnection.connect((err) => {
//   if(!err){
//     console.log("DB connection success!!")
//   }
//   else {
//     console.log("DB connection failed \n Error: "+JSON.stringify(err), undefined, 2);
//   }
// });

// mysqlConnection.query('SELECT * FROM projects', (err, rows, fields) => {
//     if (!err){
//       console.log(rows);
//     }
//     else {
//       console.log(err);
//     }
//   });


module.exports = app;
