//loading useful modules
const csvjson = require('csvjson');
const fs = require('fs');
const path = require('path');

//read that file
var fileContents = fs.readFileSync('/Users/manik.khandelwal/Downloads/customer-data.csv','utf8');

// give it to csvjson convertor
jsonObject = csvjson.toObject(fileContents);
//console.log(jsonObject);

//writing json object to a json file
var jsonContent = JSON.stringify(jsonObject) ;
fs.writeFileSync(path.join(__dirname,'jsonObject.json'),jsonContent);
