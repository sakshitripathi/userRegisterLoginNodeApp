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
    var new_user = new User(req.body);
    console.log(new_user);
    new_user.save(function (err, user) {
        if (err)
            res.send(err);
        res.send("user created successfully");
    });
};


exports.loginUser = function (req, res) {
    var token = jwt.sign({ id: req.body.userName }, 'ajgdksah', {
        expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
};

exports.validateUser = function (req, res) {
    const bearerHeader = req.headers['authorization'].split(" ")[1];
    console.log(bearerHeader);
    jwt.verify(bearerHeader, 'ajgdksah', (err, verifiedJwt) => {
        if (err) {
            res.send('false')
        } else {
            res.send('true')
        } 

    })
};