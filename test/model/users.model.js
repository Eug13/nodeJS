const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Bcrypt
const bcrypt = require('bcrypt');


SchemaUsers = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 3,
        max: 120,
        default: 18
    },
    email: {
        type: String,
        required: true
    }
})

SchemaUsers.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

SchemaUsers.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password);
}
module.exports = mongoose.model("users", SchemaUsers);

