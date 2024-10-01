const fs = require("fs"); 

//first the file name, then what we want to rename it to 
//fs.renameSync("./lib/config.js", "./lib/project-config.js");

//message to say the function completed 
console.log("Config.js file renamed"); 

fs.rename("./lib/notes.md", "./notes.md", function(err) {
    if (err) {
    throw err;
    }
        console.log("file renamed"); 
});

//we can remove a file entirely using this line of code
//fs.unlinkSync("./lib/project-config.js"); 

//remove the notes file
fs.unlink("notes.md", function (err) {
    if (err) {
        throw err;
    }
    console.log("Notes are gone");
});