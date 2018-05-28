const express = require('express');
const server = express();

server.set('view engine', 'pug');
server.use('/css', express.static(__dirname + "/css"));
server.use('/img', express.static(__dirname + "/img"));
server.use('/fonts', express.static(__dirname + "/fonts"));
server.use('/js', express.static(__dirname + "/js"));

server.get("/", (req, res) => {
    // res.send('hello express');
    res.render('index',{
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

    });//for pug

})

server.get("/order", (req, res) => {
    // res.send('hello express');
    res.render('order',{
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

    });//for pug

})

server.listen(81, () => console.log('running!!!!!!!!!!'));