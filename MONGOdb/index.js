

const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Users = require('./model/users.model');

server.listen(81, () => console.log('running!!!!!!!!!!'));

mongoose.connect('mongodb://localhost/test')
    .then(console.log('connected !!'))
    .catch(e => console.log(e));

server.set('view engine', 'pug');
server.use('/css', express.static(__dirname + "/css"));
server.use('/img', express.static(__dirname + "/img"));
server.use('/fonts', express.static(__dirname + "/fonts"));
server.use('/js', express.static(__dirname + "/js"));


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
    footText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatemquia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."

}



server.get("/", (req, res) => {
    // res.send('hello express');
    res.render('index',menu);//for pug

})

server.get("/home", (req, res) => {
    res.render('index',menu);//for pug

})

server.get("/about", (req, res) => {
    res.render('about',menu);//for pug

})

server.get("/prices", (req, res) => {
    res.render('prices',menu);//for pug

})

server.get("/how-it-works", (req, res) => {
    res.render('how-it-works',menu);//for pug

})

server.get("/discount", (req, res) => {
    res.render('discount',menu);//for pug

})

server.get("/order", (req, res) => {
    res.render('order',menu);//for pug

})

server.get("/faq", (req, res) => {
    res.render('faq',menu);//for pug

})

server.get("/testimonials", (req, res) => {
    res.render('testimonials',menu);//for pug

})

server.get("/blog", (req, res) => {
    res.render('blog',menu);//for pug

})

server.get("/samples", (req, res) => {
    res.render('samples',menu);//for pug

})

server.get("/login", (req, res) => {
    res.render('login',menu);//for pug

})

server.get("/login1", (req, res) => {
    res.render('login1',menu);//for pug

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


server.post('/login', (req, res) => {
    const data = req.body;
    console.log(data);


    // Users.find({ email: data.email })
    //     .then(users => {
    //         if (!users[0].validPassword(data.password)) {
    //             res.send('Your password is wrong try again!');
    //         } else {
    //             res.send(users);
    //         }
    //     })

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