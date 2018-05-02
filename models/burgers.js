// * Inside your `burger` directory, create a folder named `models`.

//   * In `models`, make a `burger.js` file.

//     * Inside `burger.js`, import `orm.js` into `burger.js`

//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

//     * Export at the end of the `burger.js` file.

var orm = require('../config/orm.js');
var burgers = {
  getallburgers: function(){ orm.selectAll(output, 'burgers')},
  insertaburger: function(obj){ orm.insertOne(output,'burgers',obj)},
  updateaburger: function(setobj, burgerid){ orm.updateOne(output,'burgers',setobj,{ID: burgerid})}
}
function output(data){
console.log(data);
};
module.exports = burgers;