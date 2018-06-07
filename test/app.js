var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const blogRouter = require('./routes/blog');
const singleRouter = require('./routes/single');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

var app = express();

mongoose.connect('mongodb://localhost/test')
    .then(console.log('connected !!'))
    .catch(e => console.log(e));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const menu = {
  title: 'Home Page',
  toll_for_free: '+1-(044)-147-0235',
  call_now: '+1-(044)-147-0235',
  facebook_link: 'http://fb.com',
  twitter_link: 'https://twitter.com',
  pinterest_link: 'https://pinterest.com',
  main_menu: [
    "home",
    "about",
    "prices",
    "how-it-works",
    "discount",
    "order",
    "faq",
    'testimonials',
    "blog",
    "samples",
    "login"
  ],
  footText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatemquia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."

};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.locals.menu = menu;
  next();
})

app.use('/', indexRouter)
app.use('/users', usersRouter);
app.use('/blog', blogRouter);
app.use('/:id', singleRouter);

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
//  app.use(bodyParser());

//  app.post('/signup', (req, res) => {
//      const data = req.body;
//      console.log(data.password);
 
//      Users.find({ email: data.email })
//          .then(users => {
//              console.log(users);
//              if (users.length >= 1) {
//                  console.log('we are here');
//                  return res.status(409).json({
//                      message: 'Email exists'
//                  })
 
//              } else {
//                  const user = new Users(data);
//                  user.name = data.name;
//                  user.surname = data.surname;
//                  user.age = data.age;
//                  user.email = data.email;
//                  user.password = user.generateHash(data.password);
//                  user.save();
//                  res.redirect('/login');
 
 
//                  //====== second variant ==========>
//                  // Users.create(req.body, (err, users) => {
//                  //     if (err) {
//                  //         console.log(err);
//                  //     } else {
//                  //         res.redirect('/');
//                  //     }
//                  // })
//                  //====== second end ==========>
//              }
//          })
//  });
 
 
//  app.post('/login', (req, res) => {
//      const data = req.body;
//      console.log(data);
 
 
//     //  Users.find({ email: data.email })
//     //      .then(users => {
//     //          if (!users[0].validPassword(data.password)) {
//     //              res.send('Your password is wrong try again!');
//     //          } else {
//     //              res.send(users);
//     //          }
//     //      })
 
//  });

//just a commentS

module.exports = app;
