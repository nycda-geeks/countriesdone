var fs = require('fs');
​
function JSONreader(filename, callback){
	fs.readFile(filename, function(err,data) {
	if (err) {
		throw err;
	}
	var parsedJSON = JSON.parse(data);
​
	callback(parsedJSON);
	});
​
}
​
module.exports = {
	JSONreader: JSONreader
}