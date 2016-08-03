
var phrases;
exports.connect = function(){
	phrases = require("./ru");
};

exports.getPhrase = function(name){
	if(!phrases[name]){
		throw new Error("There is no such phrase like " + name)
	}
	return phrases[name];
}