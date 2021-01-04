'use strict';

// Building a Simple Promise
console.log('global scope-1');
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening 🔮');
  setTimeout(function () {
    console.log('inside Web-APIs callback');
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

console.log('global scope-2 ');
lotteryPromise
  .then(res => {
    console.log('executing lotteryPromise microtask.');
    console.log(res);
  })
  .catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    //console.log(" -- Inside promise c'tor");
    setTimeout(resolve, seconds * 1000);
    //console.log(' -- setTimeout is called..');
  });
};

console.log(' -- Calling wait-function chains..');
wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => console.log('4 second passed'));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
