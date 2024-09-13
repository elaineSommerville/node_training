process.stdout.write("Hello  \n \n");

const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language"
];
const answers = [];

function ask(i = 0) {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
}

//ask function 
ask();

//this is an event listener, as its actioned by "data"
process.stdin.on("data", function (data) {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) { //if there are less answers than questions
    ask(answers.length); //ask the next question 
  } else {
    process.exit(); 
  }
});

//when we call the exit function above, we call this function
//call this function at a specific time
//this is an event listener
//it listens for the 'exit' event to be called, then it executes
process.on("exit", function() {
  process.stdout.write("\n\n\n\n");
  process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);
})


