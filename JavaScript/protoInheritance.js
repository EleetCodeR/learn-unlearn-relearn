'use strict';

// Constructor
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Person.prototype.species = 'Homo Sapiens';

const jonas = new Person('Jonas', 1991);

// Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);

// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

// extending array behavior (not recommended in practice)
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); // [3 6 5 9]

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
