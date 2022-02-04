const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    bookname : {
        type: String,
        required: true,
        
    },
    category : String
   
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;