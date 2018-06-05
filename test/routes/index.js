var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Users = require('../model/users.model');
const Posts = require('../model/posts.model');

router.use(bodyParser());
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

}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', menu);
});

router.get('/about', function (req, res, next) {
  res.render('about', menu);
});


router.get('/discount', function (req, res, next) {
  res.render('discount', menu);
});

router.get('/faq', function (req, res, next) {
  res.render('faq', menu);
});

router.get('/how-it-works', function (req, res, next) {
  res.render('how-it-works', menu);
});

router.get('/login', function (req, res, next) {
  res.render('login', menu);
});

router.get('/order', function (req, res, next) {
  res.render('order', menu);
});

router.get('/prices', function (req, res, next) {
  res.render('prices', menu);
});

router.get('/samples', function (req, res, next) {
  res.render('samples', menu);
});

router.get('/testimonials', function (req, res, next) {
  res.render('testimonials', menu);
});

router.get('/home', function (req, res, next) {
  res.render('index', menu);
});

router.get('/login1', function (req, res, next) {
  res.render('login1', menu);
});




router.post('/login', (req, res) => {
  const data = req.body;
  console.log(data);


  Users.find({ email: data.email })
    .then(users => {
      if (!users[0].validPassword(data.password)) {
        res.send('Your password is wrong try again!');
      } else {
        // res.send(users);
        res.redirect('/login1');
      }
    })

});




router.post('/login1', (req, res) => {
  const data = req.body;
  console.log(data);

  Posts.find({ title: data.title })
    .then(posts => {
      if (posts.length >= 1) {
        console.log('we are here');
        return res.status(409).json({
          message: 'title exists'
        })
      } else {
        const blog = new Posts(data);
        blog.category = data.category;
        blog.author = data.author;
        blog.title = data.title;
        blog.text = data.text;
        blog.save();
      }
    })


  // Posts.find({})
  //   // .limit(2)
  //   .sort("title")
  //   .then(posts => {
  //     console.log(posts)
  //     // Posts.find({ name:"" }).remove()
  //     //     .then(() => { console.log('removed'); console.log(users) })
  //     //     .catch(e => console.log(e))
  //   })
  //   .catch(e => console.log(e))

});




module.exports = router;

//multer