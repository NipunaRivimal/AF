const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const CourseSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    code: {
        type: String,
        required : true
    },
    passMark: {
        type: Number
    },
    lecturerInCharge: {
        type: String
    },
    subjects : 
        {
            // type: Schema.Types.ObjectId,
            //ref: 'subject'
        type: Array
        }
        
});
module.exports= Course = mongoose.model('course', CourseSchema);