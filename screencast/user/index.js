//exports
//global
var db = require("../db");
var log = require("../logger")(module);

function User(name){
	this.name = name;
}

User.prototype.hello = function(who){
	log(who.name + ", " + db.getPhrase("Hello"));
}

//console.log(module);
console.log("index is required");

module.exports = User;