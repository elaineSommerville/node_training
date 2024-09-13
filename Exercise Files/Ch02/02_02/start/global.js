const path = require("path");

let hello = "Hello World from Node.js";
let justNode = hello.slice(17);
console.log(`Who let the ${justNode} out?`);

let myName = "elaine";
let day = "Wednesday";
console.log(`Hey there ${myName}, its ${day}`);

console.log(`The path name is ${path.basename (__dirname)}`);
console.log(`The file name is ${path.basename (__filename)}`);

for (let key in global ) {
    console.log(key);
}


