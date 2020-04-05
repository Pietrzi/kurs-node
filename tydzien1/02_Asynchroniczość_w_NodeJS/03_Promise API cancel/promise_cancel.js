const getRandomDelay = (maxDelay) => {
  return (Math.floor(Math.random() * maxDelay)) * 1000;
};

var successDelay = null;

const getAsyncNumbers = () => {
  successDelay = getRandomDelay(10);

  return new Promise((resolve) => {
    setTimeout(
      () => resolve([1, 3, 5, 6, 4, 2]), 
      successDelay
    );
  });
};

const rejectPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Timeout"))
  }, 3000)
})

Promise.race([getAsyncNumbers(), rejectPromise])
  .then((val) => {
    console.log(val, successDelay);
  })
  .catch((error) => {
    console.warn(error, successDelay)
  })