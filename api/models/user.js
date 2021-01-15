"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: "Kindly enter your username",
  },

  email: {
    type: String,
    required: "kindly enter your email",
  },
  password: {
    type: String,
    required: "Kindly enter the password",
  },
});

module.exports = mongoose.model("User", UserSchema);
