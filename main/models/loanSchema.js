//import mongoose from 'mongoose';
let mongoose = require('mongoose');

const { Schema } = mongoose;

const loanSchema = new Schema({
    id: Number,
    customerName: {
        type: String,
        required: [true, 'must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, ' must have less or equal then 40 characters'],
        minlength: [10, ' must have more or equal then 10 characters']
     
    },
    phoneNumber:String,
    address:String,
    loanAmount:{
        type: Number,
        default: 0,
    },
    interest:Number,
    loanTermYears:Number,
    loanType:String,
    description: {
        type: String,
        required: [true, 'A description must have a intrusctor  name'],
        unique: true,
        trim: true,
    },
    createdDate:Date,
    insertedDate: { type: Date, default: Date.now },
    isDeleted: false
});


const loan = mongoose.model('Loan', loanSchema);

module.exports= loan

