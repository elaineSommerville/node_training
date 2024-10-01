//require the file sysem module.
const fs = require("fs");

//new variable to hold the users answers 
let answerStream;

let questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?"
];

let answers = [];

function ask(i) {
  process.stdout.write(`\n\n\n\n  ${questions[i]}`);
  process.stdout.write(`  >  `);
}

//new listener
//listen for data and pass the data to the callback function 
process.stdin.once("data", (data) => {
  let name = data.toString().trim(); //parse the data and store it in 'name'
  let fileName = `./${name}.md`; //calling the file the users name 
  if(fs.existsSync(fileName)) { //check if the file already exists
    fs.unlinkSync(fileName); //if it exists, delete it
  }
  //creating a write stream with the uer answers
  answerStream = fs.createWriteStream(fileName);
  answerStream.write(`Question Answers for ${name}\n========\n`);
});

process.stdin.on("data", function (data) {
  let answer = data.toString().trim();//variable for the users answer

  answerStream.write(`Question: ${questions[answers.length]}\n`); 

  answerStream.write(`Answer: ${answer}\n`, function() {
    if (answers.length < questions.length) {
      ask(answers.length);
    } else {
      process.exit();
    }
  });
  answers.push(answer); 
  });
  
process.on("exit", function () {
  answerStream.close(); 
  process.stdout.write("\n\n\n\n  ");
  process.stdout.write(
    `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later!`
  );
  process.stdout.write("\n\n\n\n");
});

ask(answers.length);
