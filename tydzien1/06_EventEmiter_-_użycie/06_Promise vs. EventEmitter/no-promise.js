Promise.resolve(5)
  .then((num) => num + 5)
  .then((num) => num * 5)
  .then((num) => num * 5)
  .then((num) => num - 5)
  .then((num) => console.log(num));
