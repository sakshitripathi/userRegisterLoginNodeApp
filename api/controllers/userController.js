"use strict";

var mongoose = require("mongoose"),
  User = mongoose.model("User");

exports.createUser = function (req, res) {
  var userparams = req.body;
  console.log(userparams.username);
  if (userparams.username == "") {
    res.send("username cannot be empty");
    return;
  }

  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userparams.email)) {
    res.send(" invalid email id");
  }
  if (!/^[A-Za-z]\w{8,16}$/.test(userparams.password)) {
    res.send("invalid password,try another");
    return;
  }

  var new_user = new User(req.body);
  console.log(new_user);
  new_user.save(function (err, user) {
    if (err) res.send(err);
    res.send("user created successfully");
  });
};
