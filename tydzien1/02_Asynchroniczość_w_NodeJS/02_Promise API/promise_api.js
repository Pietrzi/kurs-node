const getRandomDelay = (maxDelay) => {
  return (Math.floor(Math.random() * maxDelay)) * 1000;
};

const getAsyncNumbers = () => {
  var successDelay = getRandomDelay(10);
  var errorDelay = getRandomDelay(10);

  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve([1, 3, 5, 6, 4, 2]), 
      successDelay
    );

    setTimeout(
      () => reject(new Error('No numbers found :(')), 
      errorDelay
    );
  });
};

Promise.all([
  getAsyncNumbers(),
  getAsyncNumbers(),
  getAsyncNumbers(),
])
.then((results) => {
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
  console.warn(results)
})
.catch(error => {
  console.warn(error)
})

Promise.allSettled([
  getAsyncNumbers(),
  getAsyncNumbers(),
  getAsyncNumbers(),
])
.then((results) => {
  console.log(results[0].status)
  console.log(results[1].status)
  console.log(results[2].status)
})
.catch(error => {
  console.warn(error)
})

Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
])
.then((results) => {
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
})
.catch(error => {
  console.warn(error)
})

Promise.all([
  Promise.reject(1),
  Promise.reject(2),
  Promise.reject(3),
])
.then((results) => {
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
})
.catch(error => {
  console.warn(error)
})