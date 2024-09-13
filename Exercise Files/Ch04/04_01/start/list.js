const fs = require("fs");

//create a variable called files
//this will read files and store them in a variable
//read from the directory we're currently in
//this is blocking as it's sync
//let files = fs.readdirSync("./"); 

//alternative way to read the files
//non-blocking
fs.readdir("./", function (err, files) {
    if(err) {
        throw err;
    }
    //print the files 
    console.log(files); 
});
//this is printed out first, then the files list will be seen after
console.log("reding files ...");

