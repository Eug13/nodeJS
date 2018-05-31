

const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Users = require('./model/users.model');
//MONGOOSE

server.listen(80, () => console.log('running!!!!!!!!!!'));

mongoose.connect('mongodb://localhost/test')
    .then(console.log('connected !!'))
    .catch(e => console.log(e));

server.set('view engine', 'pug');
server.use('/css', express.static(__dirname + "/css"));
server.use('/img', express.static(__dirname + "/img"));
server.use('/fonts', express.static(__dirname + "/fonts"));
server.use('/js', express.static(__dirname + "/js"));


server.get("/", (req, res) => {
    // res.send('hello express');
    res.render('index');//for pug

})
server.use(bodyParser());

server.post('/signup', (req, res) => {
    // const data = req.body;

    Users.find({ email: req.body.email })
        .then(users => {
            if (users.length >= 1) {
                console.log('we are here');
                return res.status(409).json({
                    message: 'Email exists'
                })

            } else {
                const user = new Users(req.body);
                user.save();
                res.send('OK');


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


// Users.find()
//     .then(users => {
//         Users.find()
//          .remove()
//             .then(() => console.log('Removed'));
//     });





// Users.find({})
//     // .limit(2)
//     .sort("name")
//     .then(users => {
//         console.log(users)
//         Users.find({ name:"" }).remove()
//             .then(() => { console.log('removed'); console.log(users) })
//             .catch(e => console.log(e))
//     })
//     .catch(e => console.log(e))