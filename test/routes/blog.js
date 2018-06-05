var express = require('express');
var router = express.Router();


const Posts = require('../model/posts.model');

router.get('/', function(req, res, next) {
    Posts.find()
        .sort('-date')
        .then(posts => {
            // console.log(posts[0].date.month);
            res.render('blog', {
                title: '[Blog Page]',
                posts
            });
        });
  });

module.exports=router;