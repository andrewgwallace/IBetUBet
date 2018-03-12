document.addEventListener('DOMContentLoaded', function() {
// GAME FUNCTIONALITY

// Gameplay functions and variables

let p1 = '';
let p2 = '';
let p1Bet;
let p2Bet;
let p1Guess;
let p2Guess;
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

function newGame() {

}

function playRound () {
  getBetsandGuesses();
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


// HTML JS

  let scoreboard = document.querySelector('.scoreboard');
  let numButtons = document.querySelector('.numbers');
  let p1Score = document.querySelector('.p1points');
  let p2Score = document.querySelector('.p2points');
  p1Score.innerHTML = `Points: ${p1Points}`;
  p2Score.innerHTML = `Points: ${p2Points}`;
  let p1GuessBox = document.querySelector('input[name="p1guess"]');
  let p2BetBox = document.querySelector('input[name="p2bet"]');
  let p2GuessBox = document.querySelector('input[name="p2guess"]');
  let p1Ready = document.querySelector('input[name="p1ready"]');
  let p2Ready = document.querySelector('input[name="p2ready"]');
  let numbox;


  function targetClick(event) {
    if (event.target.className.includes('numbox')) {
      numbox = event.target;
    }
    if (/[1-9]/g.test(event.target.innerText)) {
      number = event.target.innerText;
      numbox.value = number;
    }
    return;
  }

  function onReadyClick (event) {
    // checkIfValues
    // submit numbers and disable
  }

  function onGoClick (event) {
    //check that both ready buttons are disabled
    // if yes, run roundWinner function (which should include timeout)
  }

  // numButtons.addEventListener('click', targetClick);
  document.addEventListener('click', targetClick);

  // p1Ready.addEventListener('click', onClick);

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

function score () {
  p1Score.innerHTML = `Points: ${p1Points}`;
  p2Score.innerHTML = `Points: ${p2Points}`;
}

disableKeys();
});
