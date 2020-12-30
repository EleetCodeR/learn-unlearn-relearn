'use strict';

// By Convention constructors should start with capital letters.
// function declarations and Expressions both types are allowed;
// except Arrow functions as they do not get 'this' keyword.
// The only difference between a normal function and a constructor is that;
// constructors are called used "New" Keyword.

const Person = function (firstName, birthYear) {
  // Instance Properties:
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create methods like this --> inefficient, repeated in every object.
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };

  // instead  we use prototypes and prototypal inheritance.
};

const person = new Person('Ryan', 1991);
console.log(person);
