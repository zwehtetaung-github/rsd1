const fs = require("fs");

console.log("starging...");

fs.readFile("./README", function(err, data){
    console.log(data.toString());
});

console.log("Done");