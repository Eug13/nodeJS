const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

mongoose.model("users", SchemaUsers);
