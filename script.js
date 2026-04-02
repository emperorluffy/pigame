'use strict';
// selecting elements
const score0El = document.querySelector('#score--0'); //# is for selecting Id
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

//STARTING CONDITIONS
score0El.textContent = 0;
score1El.textContent = 1;
diceEl.classList.add('hidden');
