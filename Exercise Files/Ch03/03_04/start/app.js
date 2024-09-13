//this file is responsible for consuming everything else

//we're importing this javascript file, the dot demotes that the file is in the same directory as this file
const myModule = require("./myModule");

//this is the destructing way to import the properties from the other file
const {inc, dec, getCount} = require("./myModule");

//this will ptint out true
console.log(myModule.anything);
//this will print out 1, it was initialised to 0 and then runs one, so becomes 1  
console.log(myModule.inc());
//turns it back to 0
console.log(dec());

inc();
inc();
inc();

//remember this needs to be the back-ticks!!! 
//getCount is the function that keeps track of the current count 
console.log(`the count is ${getCount()}`);