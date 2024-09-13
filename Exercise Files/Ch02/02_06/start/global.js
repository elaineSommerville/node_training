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

ask();

//asynchronously
//this is an event listener
//only calls when there is a data event
process.stdin.on("data", function (data) {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

//asynchronously
//this is an event listener
//only calls when there is an exit event
process.on("exit", function () {
  process.stdout.write("\n\n\n\n");
  process.stdout.write(
    `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`
  );
});

//we can also do more asynchronous functions with setTimeout
const waitTime = 3000; //3 seconds
console.log(`setting a ${waitTime / 1000} second delay`);
const timerFinished = () => {
  clearInterval(interval);
  console.log("done");
};

setTimeout(timerFinished, waitTime);

const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(` waiting... ${p}`);

  console.log(`waiting ${currentTime / 1000} seconds`); 
};

//every tick of waitTime lapsing we're going to call the fucntion  
const interval = setInterval(incTime, waitInterval);

