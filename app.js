var fs = require('fs');
var separateModule = require('./json-file-reader.js');
​
var input = process.argv[2]; 
​
fs.readFile('./countries.json', function(err,data){
  if (err){
    throw err;
  }
  var countries = JSON.parse(data);
  
  countries.forEach(function(item){
    if (input == item.name){
      console.log("Country: " + item.name);
      console.log("Top Level Domain: " + item.topLevelDomain)
    } 
  })
​
});
​
​
separateModule.JSONreader('./countries.json', callback);
​
function callback(parsedJSON){
  parsedJSON.forEach(function(key){
    if (input === key.name){
      console.log("Country: " + key.name);
      console.log("Top Level Domain: " + key.topLevelDomain)
    }
  });
}




