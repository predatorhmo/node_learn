var User = require("./user");
var log = require("./logger")(module);
var db = require("./db")
db.connect();

function run(){
	var vasya = new User("Vasya");
	var petya = new User("Petya");

	vasya.hello(petya);
	log(db.getPhrase("Run succesfull"));
}
if(module.parent) {
	exports.run = run;
} else{
	run();
}