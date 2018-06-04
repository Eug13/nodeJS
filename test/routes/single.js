var express = require('express');
var router = express.Router();


const Posts = require('../model/posts.model');

router.get('/:id', (req, res) => {
    Posts.find({
            _id: req.params.id
        })
        .then(result => {
            const post = result[0];
            if (post) {
                res.render('single', {
                    title: post.title,
                    post: post                 
                });
            }
        });
});

module.exports=router;