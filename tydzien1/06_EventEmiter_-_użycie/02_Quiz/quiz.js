// Useful imports
const inquirer = require("inquirer");
const EventEmitter = require("events");
const emitter = new EventEmitter();

const quiz = require("./questions.js");
const { prompt } = inquirer;

let correctCounter = 0;
let wrongCounter = 0;

emitter.on("correct", () => {
  correctCounter++;
});

emitter.on("wrong", () => {
  wrongCounter++;
});

emitter.on("completed", () => {
  let result = correctCounter / (wrongCounter + correctCounter);
  if (result > 0.75) {
    console.log("Zaliczono!");
  } else {
    console.log("...słabo");
  }
});

async function questionLoop() {
  for (let i = 0; i < quiz.length; i++) {
    let answer = await prompt([
      { type: "list", name: "wybrany", ...quiz[i].question },
    ]);
    if (quiz[i].answer === quiz[i].question.choices.indexOf(answer.wybrany)) {
      emitter.emit("correct");
      continue;
    }
    emitter.emit("wrong");
  }
  emitter.emit("completed");
}

questionLoop();