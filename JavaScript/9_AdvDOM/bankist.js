'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Button-scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1_coords = section1.getBoundingClientRect();
  console.log(s1_coords);

  //scrolling
  window.scrollTo(
    s1_coords.left + window.pageXOffset,
    s1_coords.top + window.pageYOffset
  );

  //smooth-scrolling (pass an object)
  window.scrollTo({
    left: s1_coords.left + window.pageXOffset,
    top: s1_coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  //modern-way of scrolling to an element
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page Navigation using EVENT DELEGATION

// Older-way (but adding event listeners like this to every element  defeats the DRY-principle)
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Using Concepts of Event Bubbling to addeventlisteners effectively.

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // Matching Strategy:
  if (e.target.classList.contains('nav_link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
