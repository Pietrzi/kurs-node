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
