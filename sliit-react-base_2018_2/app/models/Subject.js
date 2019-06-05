const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema

const SubjectScheme = new Schema({

    name : {
        type : String,
        required: true
    },
    description : {
        type: String
    },
    amount : {
        type : Number
    }
});

module.exports = Subject =  mongoose.model('subject', SubjectScheme);
