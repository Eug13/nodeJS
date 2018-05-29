const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/test')
    .then(console.log('connected !!'))
    .catch(e => console.log(e));


require('./model/users.model');
const Users = mongoose.model('users');
const user = new Users({
    name: "Tom",
    surname: "Tompson",
    password: "7777",
    age: 38,
    email: "name@name.com"
});

user.save()
    .then((user)=>console.log((user)))
    .catch(e=>console.log(e))


Users.find({})
    // .limit(2)
    .sort("name")
    .then(users => {
        console.log(users)
        // Users.find({ name: 'Tom' }).remove()
        //     .then(() => { console.log('removed'); console.log(users) })
        //     .catch(e => console.log(e))
    })
    .catch(e => console.log(e))