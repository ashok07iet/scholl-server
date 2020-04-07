const mongoose = require('mongoose');
const counter=require('./couter.sequnce');
var schema = new mongoose.Schema({
    rollNumber: Number,
    firstName: {type:String,required:true},
    lastName: {type:String,required:true},
    fatherName:{type:String,required:true},
    motherName:{type:String,required:true},
    sex: {type:String,enum:['M','F'] ,required:true},
    adress: {type:String,required:true},
    state: {type:String,required:true},
    distric: {type:String,required:true},
    city: {type:String,required:true},
    pincode: {type:Number,required:true},
    course: {type:String,required:true},
    emailId: {type:String,required:true},
    dob: {type:Date,required:true},
    Mobile: {type:Number,required:true},
    age: {type:Number,required:true},
});
schema.pre('save', async function(next) {
    this.rollNumber=await counter.nextVal();
    next();
  });
module.exports = mongoose.model('Students', schema);