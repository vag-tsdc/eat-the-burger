// server.js

var express = require("express");
var app = express();

var hbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


var PORT = process.env.PORT || 8000;

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// allows body parser to parse the data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// allow assets folder to be used for static content
app.use("/assets", express.static("assets"));

// Establish the engine as Handlebars and use the Defult view as the main.handlebars file
app.engine("handlebars", hbs({ defultLayout: "main" }));
app.set("view engine", "handlebars");

// routers being created
var routes = require("./controller/burger-cont.js");

app.use("/", routes);


app.listen(PORT, function() {
    console.log("APP is listening on PORT: " + PORT);
});