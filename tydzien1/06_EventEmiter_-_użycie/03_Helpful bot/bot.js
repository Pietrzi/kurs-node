// Useful imports
import inquirer from 'inquirer';
import { EventEmitter } from 'events';

const { prompt } = inquirer;

const activity = [
  'Give me date and time',
  'Tell me a joke',
  'Say a compliment',
  'That is all, thanks!',
];

const listOfCompliments = [
  "You're an awesome friend",
  "You're a smart cookie",
  'You are awesome!',
  'You are the most perfect you there is.',
  'You light up the room.',
  'You deserve a hug right now.',
  "On a scale from 1 to 10, you're an 11.",
  'That color is perfect on you.',
];

const listOfJokes = [
  'Why do birds fly to warmer climates in the winter? - It’s much easier than walking!',
  'How does the ocean say hello? - It waves.',
  'What do you call a fake noodle? - An im-pasta.',
  'Why can’t you trust atoms? - They make up everything.',
  'What did one plate whisper to the other plate? - Dinner is on me.',
  'What kind of tree fits in your hand? - A palm tree!',
];

async function flow() {
  while (true) {}
}

flow();
