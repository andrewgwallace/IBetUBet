let p1 = "Andrew";
let p2 = "Computer";
let p1Bet = 4 ;
let p1Guess = 7;
let p2Bet = 5;
let p2Guess = 9;
let p1Diff = Math.abs(p1Guess - p2Bet);
let p2Diff = Math.abs(p2Guess - p1Bet);
let tie = false;
let superTie = false
let superTieCount = 0;

let round = 1;
let p1Points = 50;
let p2Points = 50;
let jackpot = 100;
let p1Multiplier = 3 // 1, 2, or 3
let p2Multiplier = 2 // 1, 2, or 3


let p1RoundsWon = 0;
let p2RoundsWon = 0;
let gameWinner = '';

let scoreboard = document.querySelector('.scoreboard');

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
  if (p1RoundsWon > 5 ) {
    console.log("Player 1 Wins the Game!");
  } else if (p2RoundsWon > 5) {
    console.log("Player 2 Wins the Game!");
  } else {
    findRoundWinner();
    playRound();
  }
}

function getBetsandGuesses () {
  p1Bet = prompt("What is your bet, player 1?");
  p1Guess = prompt("And what is your guess, P1?");
  p2Bet = prompt("What is your bet, player 2?");
  p2Guess = prompt("And what is your guess, P2?");
  findRoundWinner();
}

findRoundWinner();
