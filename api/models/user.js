'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    fullname: {
        type: String,
        required: 'Kindly enter your fullname'
    },
    mobileno:{
        type:Number,
        required:'kindly enter your mobileno'
    },
    email:{
        type:String,
        required:'kindly enter your email'
    },
    password: {
        type: String,
        required: 'Kindly enter the password'
    }
});

module.exports = mongoose.model('User', UserSchema);