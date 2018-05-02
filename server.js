require('dotenv').config();

var mod = require('./models/burgers');
//mod.insertaburger();

var obj = {
  BURGER_NAME: 'DELUX', DEVOURED: false 
};
mod.updateaburger(obj,1);
mod.getallburgers();