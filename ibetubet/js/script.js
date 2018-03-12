// DOM Manipuation

document.addEventListener('DOMContentLoaded', function() {

  let imported = document.createElement('script');
  imported.src = 'js/game.js';
  document.head.appendChild(imported);

  // Put index.html JS below this line.
  let onePlayer = document.querySelector('input[name="p1Name"]');
  let twoPlayer = document.querySelector('input[name="p2Name"]');
  let startButton = document.querySelector('#start');
  let continueButton = document.querySelector('#continue');
  startButton.disabled = true;
  continueButton.disabled = true;

  onePlayer.addEventListener('change', checkReady);
  twoPlayer.addEventListener('change', checkReady);
  // startButton.addEventListener('click')

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
      startButton.disabled = true;
      startButton.innerHTML = "Enter player name(s)";
    }
  }

  // Put game.html JS below this line.
  let scoreboard = document.querySelector('.scoreboard');

  let numButtons = document.querySelector('.numbers');
  let p1Bet = document.querySelector('input[name="p1bet"]');
  let p1guess = document.querySelector('input[name="p1guess"]');
  let p1Multiplier = document.querySelector('input[name="p1multipler"]');
  let p2Bet = document.querySelector('input[name="p2bet"]');
  let p2guess = document.querySelector('input[name="p2guess"]');
  let p2Multiplier = document.querySelector('input[name="p2multipler"]');


  // function entryLimit (event, entry) {
  //   let numbox = document.querySelector('.numbox')
  //   entry = event.target.innerHTML
  //   if (entry.length <= 1 && event.which !== 8) {
  //       document.keydown = false;
  //   }
  // }

  function onClick(event) {
    let number = event.target.innerHTML;
    p1Bet.value = number;
    // console.log(`You clicked ${event.target}`);
  }

  numButtons.addEventListener('click', onClick);
  // window.addEventListener('click', onClick);


  //Disable other keyboard input except numbers and backspace
  document.onkeydown = function(event) {
    // console.log(event.which);
    if (event.which < 49 || event.which > 57) {
      if (event.which === 8) {
        return true;
      } else {
        return false;
      }
    }
  }



});
