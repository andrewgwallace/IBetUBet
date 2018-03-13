// DECLARATIONS

let p1 = '';
let p2 = '';
let p1Bet;
let p2Bet;
let p1Guess;
let p2Guess;
let p1Multiplier;
let p2Multiplier;
let p1Diff = Math.abs(p1Guess - p2Bet);
let p2Diff = Math.abs(p2Guess - p1Bet);
let superTieCount = 0;

let round = 1;
let p1Points = 50;
let p2Points = 50;
let jackpot = 100;
let p1RoundsWon = 0;
let p2RoundsWon = 0;
let gameWinner = '';

// DOM MANIPULATION

let jackpotDisplay = document.querySelector('.jackpot');
jackpotDisplay.innerHTML = `Jackpot: ${jackpot}`;
let scoreboard = document.querySelector('.scoreboard');
const numButtons = document.querySelector('.numbers');
let p1Score = document.querySelector('.p1points');
let p2Score = document.querySelector('.p2points');
p1Score.innerHTML = `Points: ${p1Points}`;
p2Score.innerHTML = `Points: ${p2Points}`;
const p1BetBox = document.querySelector('input[name="p1bet"]');
const p1GuessBox = document.querySelector('input[name="p1guess"]');
const p1MultiplierBox = document.querySelector('.p1multiplier');
let p1Ready = document.querySelector('[name="p1ready"]');
const p2BetBox = document.querySelector('input[name="p2bet"]');
const p2GuessBox = document.querySelector('[name="p2ready"]')
const p2MultiplierBox = document.querySelector('.p2multiplier')
let p2Ready = document.querySelector('[name="p2ready"]');
let numbox;

document.addEventListener('DOMContentLoaded', function() {
// GAME FUNCTIONALITY
function targetClick(event) {
  if (event.target.className.includes('numbox')) {
    numbox = event.target;
  }
  if (/[1-9]/g.test(event.target.innerText)) {
    number = event.target.innerText;
    numbox.value = number;
  }
  if (event.target.name === 'p1ready') {
    // console.log("AWESOME!");
    event.preventDefault();
    p1Bet = p1BetBox.value;
    p1Guess = p1GuessBox.value;
    p1Multiplier = p1MultiplierBox.value;
    p1BetBox.value = '';
    p1GuessBox.value = '';
    p1Ready.disabled = true;
  }
  if (event.target.name === 'p2ready') {
    // console.log("AWESOME!");
    event.preventDefault();
    p2Bet = p1BetBox.value;
    p2Guess = p1GuessBox.value;
    p2Multiplier = p1MultiplierBox.value;
    p2BetBox.value = '';
    p2GuessBox.value = '';
    p2Ready.disabled = true;
  }
}

document.addEventListener('click', targetClick);
// function newGame() {
//
// }

function playRound () {

  findRoundWinner();
}

function findRoundWinner() {
  if (p1Diff < p2Diff) {
    console.log(`${p1} wins with a difference of ${p1Diff}`);
    p1RoundsWon++;
    round++;
    superTieCount = 0;
    p1Points += (p2Bet * p2Multiplier) - (p1Multiplier * p1Diff);
    p2Points -= p2Bet * p2Multiplier;
    jackpot += p1Multiplier * p1Diff;
    // isGameOver();
  }
  else if (p1Diff > p2Diff) {
    console.log(`${p2} wins with a difference of ${p2Diff}`);
    p2RoundsWon++;
    rounds++;
    superTieCount = 0;
    p2Points += (p1Bet * p1Multipler) - (p2Multiplier * p2Diff);
    p1Points -= p1bet * p1Multiplier;
    jackpot += p2Multiplier * p2Diff;
    // isGameOver();
  } else if ( p1Diff === p2Diff && (p1Guess === p2Bet && p2Guess === p1Bet)) {
    console.log("Super Tie!");
    superTieCount++;
    p1Points += (p1Bet * p1Multiplier) * superTieCount;
    p2Points += (p2Bet * p2Multiplier) * superTieCount;
    rounds++;
  } else {
    console.log("Tie round");
    p1Points -= p1bet * p1Multiplier;
    p2points -= p2bet * p2Multiplier;
    jackpot += (p1bet * p1Multiplier) + (p2bet * p2Multiplier);
  }
  // isGameOver();
}

function isGameOver () {
  findRoundWinner();
  if (p1RoundsWon > 5 ) {
    gameWinner = p1;
    console.log(`${p1} Wins the Game!`);
  } else if (p2RoundsWon > 5) {
    console.log(`${p2} Wins the Game!`);
  } else {
    playRound();
  }
}

  // function onGoClick (event) {
  //   //check that both ready buttons are disabled
  //   // if yes, run roundWinner function (which should include timeout)
  // }



//Disable other keyboard input except numbers and backspace
function disableKeys() {
  document.onkeydown = function(event) {
    if (event.which < 49 || event.which > 57) {
      if (event.which === 8) {
        return true;
      } else {
        return false;
      }
    }
  };
}

disableKeys();
});
