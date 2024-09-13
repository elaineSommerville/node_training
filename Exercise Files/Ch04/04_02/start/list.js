//include the fs module 
const fs = require("fs");

//read the readme file and use the UTF-8 encoding 
//let ipsum = fs.readFileSync("./readme.md", "utf-8");

//another way to do what we've just done on line 5
//non-blocking version
//this time we also pass in an error
fs.readFile("./readme.md", "utf-8", (err, ipsum) => {
  console.log(ipsum);
});

console.log("reading the file ...");
