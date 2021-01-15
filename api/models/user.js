'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    userName: {
        type: String,
        required: 'Kindly enter the username'
    },
    password: {
        type: String,
        required: 'Kindly enter the password'
    }
});

module.exports = mongoose.model('User', UserSchema);