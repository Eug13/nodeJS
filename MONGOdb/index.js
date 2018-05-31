

const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Users = require('./model/users.model');

const bcrypt = require('bcrypt');

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

server.get("/login", (req, res) => {
    res.render('login');//for pug
})

server.use(bodyParser());

server.post('/signup', (req, res) => {
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


server.post('/login', (req, res) => {
    const data = req.body;
    // console.log(data.password);


    Users.find({ email: data.email })
        .then(users => {
            // const checkedPass = users[0].generateHash(data.password);
            // // console.log(checkedPass);
            // if (users[0].validPassword(checkedPass)){
            // //     console.log(users[0].password);
            // console.log(users);
            // }else{
            //     console.log('nope');
            // }
            console.log(bcrypt.compareSync(data.password, users[0].password));
            // if(!users[0].validPassword(checkedPass)){
            //     // return done(null, false, req.flash('loginMessage', 'invalid password'));
               
            //     console.log('invalid password');
            // }else{
            //     console.log(users);   
            // }
            //    console.log(result);
            //    console.log(users);
            //    console.log(users.password);
         
           
            //  console.log(" woohoo ");
            // if (users.length >= 1) {
            //     console.log('we are here');
            //     return res.status(409).json({
            //         message: 'Email exists'
            //     })

            // } else {
                // const user = new Users(data);
                //     user.email = data.email;
                //     data.password = user.validPassword(data.password);
                // res.send(users[0]);
            // }
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