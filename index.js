var express = require("express"),
  app = express(),
  port = 3080,
  mongoose = require("mongoose"),
  Task = require("./api/models/user"), //created model loading here
  bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/userRoutes"); //importing route
routes(app); //register the route

app.listen(port);
