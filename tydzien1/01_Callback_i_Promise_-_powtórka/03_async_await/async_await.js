/*
  Async-Await
*/

function promiseResponse(value, callback) {
  var delay = (Math.floor(Math.random() * 10)) * 1000;  
  setTimeout(() => callback(value), delay);
}

function getAsyncNumber(number) {
  const myPromise = () => {
    return new Promise((resolve) => {
      resolve(number);
    })
  }

const promiseResponse = async () => {
    const num = await myPromise();
    console.log(num)
  }

  promiseResponse();
}

const number0Promise = getAsyncNumber(0);
const number1Promise = getAsyncNumber(1);
const number2Promise = getAsyncNumber(2);
const number3Promise = getAsyncNumber(3);
const number4Promise = getAsyncNumber(4);

