var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Users = require('./model/users.model');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

mongoose.connect('mongodb://localhost/test')
    .then(console.log('connected !!'))
    .catch(e => console.log(e));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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


 //from login page
 app.use(bodyParser());

 app.post('/signup', (req, res) => {
     const data = req.body;
     console.log(data.password);
 
     Users.find({ email: data.email })
         .then(users => {
             console.log(users);
             if (users.length >= 1) {
                 console.log('we are here');
                 return res.status(409).json({
                     message: 'Email exists'
                 })
 
             } else {
                 const user = new Users(data);
                 user.name = data.name;
                 user.surname = data.surname;
                 user.age = data.age;
                 user.email = data.email;
                 user.password = user.generateHash(data.password);
                 user.save();
                 res.redirect('/login');
 
 
                 //====== second variant ==========>
                 // Users.create(req.body, (err, users) => {
                 //     if (err) {
                 //         console.log(err);
                 //     } else {
                 //         res.redirect('/');
                 //     }
                 // })
                 //====== second end ==========>
             }
         })
 });
 
 
 app.post('/login', (req, res) => {
     const data = req.body;
     console.log(data);
 
 
    //  Users.find({ email: data.email })
    //      .then(users => {
    //          if (!users[0].validPassword(data.password)) {
    //              res.send('Your password is wrong try again!');
    //          } else {
    //              res.send(users);
    //          }
    //      })
 
 });


module.exports = app;
