const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    photo: {
        type:String,
        default: 'Photo Is Loading'
    },
    names: {
        type:String,
        required: [true, "Your Student Name Is Required"],
        trim:true,
        maxlength: [60, "A name can not have over 60 Characters"]
    },
    regno: {
        type:Number,
        required: [true, "Your registration number is required"],
        trim:true,
        length: [9, "a registration number must have nine digits"]
    },
    college: {
        type:String,
        required: [true, "Please Input your college"],
        trim:true,
        maxlength: [100, "College name does not exceed 100 characters"]
    },
    program: {
        type:String,
        required: [true, "Please Input Your Faculty"],
        trim:true,
        maxlength: [50, "A faculty can not have more than 50 characters"]
    },
    level: {
        type:Number,
        required: [true, "Input your level of education"],
        trim:true,
        maxlength: [1, "One character of your level is needed"]
    },
    computerModel: {
        type:String,
        required: [true, "You must input your computer model"]
    },
    computerSerial: {
        type:String,
        required: [true, "you must input your serial number"]
    },
    statusIn: {
        type: Boolean,
        default:false
    },
})

module.exports = mongoose.model('Student', StudentSchema)