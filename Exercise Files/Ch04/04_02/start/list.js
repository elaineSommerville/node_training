//include the fs module 
const fs = require("fs");

//read the readme file and use the UTF-8 encoding 
let ipsum = fs.readFileSync("./readme.md", "utf-8");

console.log(ipsum);
