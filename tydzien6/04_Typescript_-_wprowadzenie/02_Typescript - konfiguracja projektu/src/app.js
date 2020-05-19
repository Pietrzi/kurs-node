// import { greeting } from './test.json'; // <-- This does not work in pure JavaScript module

const greeting = 'World';

setInterval(() => {
  console.log('Hello ' + greeting, new Date().toLocaleTimeString());
}, 2000);
