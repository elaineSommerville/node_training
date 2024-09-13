function grab(flag) {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
}

let greeting = grab("--greeting");
let user = grab("--user");

console.log(greeting);
console.log(user);

process.stdout.write("Hello  \n \n ");

const questions = [
  "What is your name?",
  "what is your age?",
  "what is your eye colour?"
];
const answers = [];

//i stands for the index of one of the questions 
function ask(i) {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
}

process.stdin.on("data", function (data) {
  process.stdout.write(data.toString().trim());
})
ask(answers.length);
