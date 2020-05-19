console.log('Start of the test...');

console.log('Undefined property');
const x = {};
// console.log(x.a.b);

console.log('Property that is not a function');
const y = 'test';
// y();

console.log('Recursive function');
function recurse (a) {
  a[0] = new Array(1);
  recurse(a[0]);
}
recurse(new Array(1));

console.log('End of the test...');
