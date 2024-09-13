//first we need to require 'events'
const events = require("events"); 

//new events emitter
let emitter = new events.EventEmitter();

//creating the event
emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

//...then we need to emit the event
emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "That's cool", "Elaine");

//now we create a process, to take in new data and process it
process.stdin.on("data", (data) => { //when data is available / when it's detected
    const input = data.toString().trim(); //take the data, clean it and store it in 'input'
    if (input === "exit") { //if the input is "exit" then action the goodbye message 
        emitter.emit("customEvent", "Goodbye", "process"); //process will appear as the user
        process.exit();
    }
    //this will print to terminal whatever you write in
    emitter.emit("customEvent", data.toString().trim(), "terminal" ); //terminal is the user
});
