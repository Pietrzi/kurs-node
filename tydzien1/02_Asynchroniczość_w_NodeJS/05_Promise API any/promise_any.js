function promiseAny() {

}

promiseAny([
  Promise.reject(),
  Promise.reject(),
  // Promise.resolve
])
  .then(() => {
    console.log('Something succeeded :)')
  })
  .catch(() => {
    console.log('All failed :(');
  });
  