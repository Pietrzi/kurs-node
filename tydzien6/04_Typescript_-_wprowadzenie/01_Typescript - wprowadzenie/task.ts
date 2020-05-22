console.log('Start of the test...');

console.log('Undefined property');
const x = {};

// 1:
// console.log(x.a.b);

console.log('Property that is not a function');
const y = 'test';

// 2:
// y();

console.log('Property length');
const z = undefined;

console.log('Recursive function');
function recurse (a) {
  a[0] = new Array(1);
  recurse(a[0]);
}

// 3:
// recurse(new Array(1));

console.log('End of the test...');
