// Selecting Elements :
console.log(document.documentElement); // 'documentElement' is the actual element and not 'document'.
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); // Returns NodeList
console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button'); // returns HTMLCollection (a real-time collection), NodeList however does not update itself.
console.log(allButtons);

console.log(document.getElementsByClassName('btn')); // returns HTMLCollection (a real-time collection), NodeList however does not update itself.

//Creating and Inserting Elements

//element.insertAdjacentHTML();
const message = document.createElement('div');
// message.textContent = 'We use cookies for improved functionality and analytics. ';
message.innerHTML =
  'We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got It!</button>';

//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));
//header.before(message);
//header.after(message);

// ------------------------ Deleting Elements -------------------------------

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.parentElement.removeChild(message); // older-way
    message.remove();
  });

// ------------------------------- Styles ------------------------------------
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// manipulating CSS custom-properties / variables
document.documentElement.style.setProperty('--color-primary', 'orangered');

// ------------------------------ Attributes --------------------------------
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// setting

logo.alt = 'Beautiful minimalist logo';

// accessing Non-standard attributes
console.log(logo.designer);
console.log(logo.getAttribute('desiger'));

logo.setAttribute('company', 'Bankist');

console.log(logo.src);

console.log(logo.getAttribute('src'));

//Data Attributes

console.log(logo.dataset.versionNumber);

// Classes

logo.classList.add('a', 'b');
logo.classList.remove('a');
logo.classList.toggle('a');
logo.classList.contains('b'); // not includes (which is in arrays)

//setting class
logo.className = 'Urname'; // but this overrides all the existing classes.
