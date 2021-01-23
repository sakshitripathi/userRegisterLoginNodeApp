'use strict';
module.exports = function (app) {
    var controllers = require('../controllers/userController');

    // todoList Routes
    app.route('/createUser')
        .post(controllers.createUser);

    app.route('/loginUser')
        .post(controllers.loginUser);

    app.route('/users')
        .get(controllers.users);


    app.get('/', function (request, response){
         response.render('login.ejs');
        // var json_data = { "name": "amita", "pass": "12345" };
        // response.json(json_data);
    });
};