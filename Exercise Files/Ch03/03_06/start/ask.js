const collectAnswers = require("./lib/collectAnswers");

const questions = [
  "What is your name?",
  "Where do you live?",
  "What are you going to do with Node.js?"
];

//setting our function to a variable name
const answerEvents = collectAnswers(questions, (answers) => {
  console.log("Thank you for your answers!");
  console.log(answers);
  process.exit();
});

//calling our function to 'on'
//prints out the message with 'the answer is' before it
answerEvents.on("answer", answer => console.log(`The answer is ${answer}`));
