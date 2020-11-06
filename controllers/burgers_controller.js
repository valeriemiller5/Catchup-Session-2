// Our Burger controller
// =====================
// This file uses Sequelize to manage data manipulation
// for all apropos http requests.
// NOTE: This is the same file from last unit's homework,
// but with each route gutted and replaced with sequelize queries

// where references to our outmoded ORM file once sat.
const router = require("express").Router();

// grabbing our models
const Burger = require("../models/MyBurger");

// get route -> index
router.get("/", function (req, res) {
  // send us to the next get function instead.
  res.redirect("/burgers");
});

// get route, edited to match sequelize
router.get("/burgers", function (req, res) {
  // replace old function with sequelize function
  Burger.findAll({})
    // use promise method to pass the burgers...
    .then(function (dbBurger) {
      // into the main index, updating the page
      var hbsObject = {
        burger: dbBurger
      };
      return res.render("index", hbsObject);
    });
});

// post route to create burgers
router.post("/burgers/create", function (req, res) {
  // edited burger create to add in a burger_name
  Burger.create({
      burger_name: req.body.burger_name
    })
    // pass the result of our call
    .then(function (dbBurger) {
      // log the result to our terminal/bash window
      console.log(dbBurger);
      // redirect
      res.redirect("/");
    });
});

// put route to devour a burger
router.put("/burgers/update", function (req, res) {
    // If we are given a customer, create the customer and give them this devoured burger
    Burger.update({
      devoured: true
    }, {
      where: {
        id: req.body.burger_id
      }
    })
    .then(function(dbBurger) {
      console.log(dbBurger);
      res.json("/");
    });
  });

module.exports = router;