'use strict';


var mongoose = require('mongoose'),
    User = mongoose.model('User');
var jwt = require('jsonwebtoken');
/*
exports.list_all_tasks = function (req, res) {
    Task.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};
*/



exports.createUser = function (req, res) {
    console.log(req.body);
    var userparams=req.body
    if (userparams.fullname == '') {
        res.send("full name cannot be empty")
        return
    }
    if (isNaN(userparams.mobileno)||userparams.mobileno.length!=10) {
       res.send("invalid mobile number")
       return
   }
   if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userparams.email)) {
    res.send("invalid email id")
}
   if (!/^[A-Za-z]\w{8,16}$/.test(userparams.password)) {
       res.send("invalid password,try another")
       return
   }
   if(userparams.confirmpassword!=userparams.password)
   {
       res.send("passwords did not match")
       return
   } 
    var new_user = new User(req.body);
    console.log(new_user);
    new_user.save(function (err, user) {
        if (err)
            res.send(err);
        res.send("user created successfully");
    });
};


exports.loginUser = function (req, res) {
    var userparams=req.body
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userparams.loginemail)) {
        res.send("invalid email id")}
        if (!/^[A-Za-z]\w{8,16}$/.test(userparams.loginpassword)) {
            res.send("invalid password,try again")
            return
        }
    User.findOne({ 
        'email': req.body.loginemail,
        'password':req.body.loginpassword }, function(err, user) {
          // hanlde err..
          if (user) {
            res.send("login successful");

            
          } else {
            res.send("user not found");
          }
       })
};