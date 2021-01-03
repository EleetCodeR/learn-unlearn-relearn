'use strict';

// Eventloop in practice:
console.log('Test start');
setTimeout(() => {
  console.log('0 sec-timer');
}, 0);

//Building a Promise
Promise.resolve('Resolved promise-1').then(res => console.log(res));
Promise.resolve('Resolved promise-2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Test End');

// Output order :
// Test start
// Test End
// Resolved promise-1
// Resolved promise-2
// 0 sec-timer //Timer does not quatantee execution afer exact time.
