'use strict';
module.exports = function (app) {
    var controllers = require('../controllers/userController');
    
  var Login = require("../controllers/loginController")

    // todoList Routes
    app.route('/createUser')
        .post(controllers.createUser);

    app.route('/loginUser')
        .post(controllers.loginUser);

    app.route('/users')
        .get(controllers.users);
    
  app.route("/loginUser").post(Login.loginUser);

    app.get('/', function (request, response){
         response.render('login.ejs');
        // var json_data = { "name": "amita", "pass": "12345" };
        // response.json(json_data);
    });
};
