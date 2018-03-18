var argLine = process.argv.slice(2).toString();
var fs = require("fs");

fs.readFile(argLine, function(err,data){
  console.log(argLine);
  if(err){
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
})