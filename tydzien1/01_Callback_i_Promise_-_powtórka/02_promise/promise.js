/*
  Promises
*/

function promiseResponse(value, callback) {
  var delay = (Math.floor(Math.random() * 10)) * 1000;  
  setTimeout(() => callback(value), delay);
}

function getAsyncNumber(number) {

  return new Promise((resolve) => {
    promiseResponse(number, resolve);
  });
 
}

const number0Promise = getAsyncNumber(0);
const number1Promise = getAsyncNumber(1);
const number2Promise = getAsyncNumber(2);
const number3Promise = getAsyncNumber(3);
const number4Promise = getAsyncNumber(4);


number0Promise
  .then(console.log)
  .then(() => number1Promise)
  .then(console.log)
  .then(() => number2Promise)
  .then(console.log)
  .then(() => number3Promise)
  .then(console.log)
  .then(() => number4Promise) 
  .then(console.log)
