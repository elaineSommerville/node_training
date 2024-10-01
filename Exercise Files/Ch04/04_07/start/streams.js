const fs = require("fs");

let stream = fs.createReadStream("./chat-logs/george-ben-chat.log", "UTF-8");

//new variable to hold the data 
let data;

//streaming the data into chunks
stream.once("data", (chunk) => {
    console.log("read stream started");
    console.log("--------"); //adding a line
    console.log(chunk);
});

//calling stream on 'data'
stream.on("data", (chunk) => {
    console.log(`chunk: ${chunk.length}`);
    data += chunk; //concatenate data with the chunk 
}); 

//when the streaming of data is finished 
stream.on("end", () => {
    console.log(`finished ${data.length}`);
});

//this is the first line printed, as we're waiting for the chunks to be read
console.log("Reading the file"); 