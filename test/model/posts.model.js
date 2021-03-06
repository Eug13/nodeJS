const mongoose = require('mongoose');

const Schema = mongoose.Schema;


SchemaPosts = new Schema({
    date:{
        type:Date,
        default:new Date()
    },
    category:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }

})



module.exports = mongoose.model("posts", SchemaPosts);