// DOM Manipuation
// Require game.js

document.addEventListener('DOMContentLoaded', function() {

// Put index.html JS below this line.
let onePlayer = document.querySelector('input[name="p1Name"]');
let twoPlayer = document.querySelector('input[name="p2Name"]');
let startButton = document.querySelector('#start');
let isReady = false;
startButton.disabled = true;

onePlayer.addEventListener('change', checkReady);
twoPlayer.addEventListener('change', checkReady);

function checkReady() {
  if (onePlayer.value === '' && twoPlayer.value !== '') {
    onePlayer.value = twoPlayer.value;
    twoPlayer.value = '';
    startButton.disabled = false;
    startButton.innerHTML = "Let's Play!";
  } else if (onePlayer.value !== '' && twoPlayer.value !== '') {
    startButton.disabled = false;
    startButton.innerHTML = "2 Player Start!";
  } else if (onePlayer.value !== '' && twoPlayer.value === '') {
    startButton.disabled = false;
    startButton.innerHTML = "Let's Play!";
  } else {
      startButton.innerHTML = "Enter player name(s)";
  }
}

// Put game.html JS below this line.
let scoreboard = document.querySelector('.scoreboard');
});
