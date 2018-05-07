// #### Controller setup

// 1. Inside your `burger` directory, create a folder named `controllers`.

// 2. In `controllers`, create the `burgers_controller.js` file.

// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.
console.log('establishing routes');
var express = require("express");
var router = express.Router();
mod = require('../models/burgers');

router.get("*", function(req, res) {
  
  mod.getallburgers(function(data) {
    var hbsObject = {
      burgers: data
    };   
    
    res.render("index", hbsObject);
  });
  
});

router.post("/api/burgers/", function(req,res){
  mod.insertaburger(function(result) {
    res.json({ id: result.insertId });}, {BURGER_NAME: req.body.BURGER_NAME, DEVOURED: req.body.DEVOURED});
});

router.put("/api/burgers/:id", function(req, res) {
   mod.updateaburger(function(result) {
    if (result.changedRows === 0) {
     
      return res.status(403).end();
    }
    res.status(200).end();}, {DEVOURED: req.body.DEVOURED}, req.params.id);
});
router.delete("/api/burgers/", function(req, res) {
  
    mod.deleteburgers(function(result) {
      res.status(200).end();},  {DEVOURED: 1});
  
  
});
router.delete("/api/burgers/:id", function(req, res) {
  if(req.params.id){
    mod.deleteburgers(function(result) {
      res.status(200).end();},  {id: req.params.id});
  }
  
});


module.exports=router;





