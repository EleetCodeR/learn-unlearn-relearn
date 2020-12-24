'use strict';

//-------------------------- EVENTS-BASICS---------------------------
const h1 = document.querySelector('h1');

// modern -way (helps us to chain many events)
h1.addEventListener('mouseenter', function (e) {
  alert('addEventListener : Great! You are reading the heading :D');
});

// Another-way , events as property (but this is olderway)
h1.onmouseenter = function (e) {
  alert('addEventListener : Great! You are reading the heading :D');
};

// Removing Even listener (but callback must be a named-function)

const alertH1 = function (e) {
  alert('Removing Even listener!!!');
  // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseleave', alertH1);
setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);

// event handling using HTML attributes (NOT TO BE USED)
// We can add an attribute in html element
// eg. < h1 onclick = "alert('HTML alert')"

//-------------------------- EVENT-PROPAGATION ---------------------------

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// Event Bubbling up
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor;
  console.log('LINK', e.target, e.currentTarget);
  //target- tells where event happened, and not where handler is attached.
  // currentTarget- is where handler is actually attached.

  console.log(e.currentTarget === this); // true

  // stopping event propagation. (not recommended in practice)
  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor;
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor;
    console.log('NAV', e.target, e.currentTarget);
  },
  true
);
