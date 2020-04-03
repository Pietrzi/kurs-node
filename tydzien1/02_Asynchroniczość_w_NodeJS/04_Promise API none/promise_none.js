function promiseNone() {

}

promiseNone([
  Promise.reject(),
  Promise.reject(),
  // Promise.resolve
])
  .then(() => {
    console.log('All failed :)')
  })
  .catch(() => {
    console.log('Something succeeded :(');
  });
  