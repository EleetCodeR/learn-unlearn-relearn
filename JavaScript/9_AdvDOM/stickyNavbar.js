'use strict';
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

// call back function receives two parameters.
const obsCallback = function (entries, observer) {};

const obsOptions = {
  root: null, //is the element that the target will intersect., when mentioned 'null', it means target will intersect with the viewport.
  threshold: 0.1, //percent intersection at which the callback will be called.
  //we can also mention an-array of thresholds.[0 , 0.2]
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1); // observes the Target element mentioned
