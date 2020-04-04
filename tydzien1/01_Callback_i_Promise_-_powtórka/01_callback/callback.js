/*
  Callbacks
*/

function asynchronousResponse(value, callback) {
  var delay = (Math.floor(Math.random() * 10)) * 1000;  
  setTimeout(() => callback(value), delay);
}

let numbers = [];

function getAsyncNumber(number) {

  asynchronousResponse(number, function() {
    numbers[number] = {num: number, isDone: false};

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === undefined) {
        return;
      }
      if (!numbers[i].isDone) {
        console.log(numbers[i].num)
      }
    }
  });
  /* 
    Add implementation of getAsyncNumber function in a way that numbers
    appear on a console in order in which they have been called.

   Use asynchronousResponse to generate this responses.
  */
}

getAsyncNumber(0)
getAsyncNumber(1)
getAsyncNumber(2)
getAsyncNumber(3)
getAsyncNumber(4)