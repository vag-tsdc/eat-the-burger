// burger model

var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create([
    "burgerName",
    "devoured"
  ], [
    req.body.burgerName,
    false
  ], function (result) {
    // Send back the ID of the new burger
    res.json({
      id: result.insertId
    });
  });
});

// Export routes for server.js to use.
module.exports = router;