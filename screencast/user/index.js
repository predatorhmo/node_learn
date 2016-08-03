//exports
//global
var db = require("../db")

function User(name){
	this.name = name;
}

User.prototype.hello = function(who){
	console.log(who.name + ", " + db.getPhrase("Hello"));
}

//console.log(module);
console.log("index is required");

module.exports = User;