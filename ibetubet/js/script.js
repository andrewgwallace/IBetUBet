// DECLARATIONS

let p1 = localStorage.getItem('p1');
let p2 = localStorage.getItem('p2');
let p1Bet;
let p2Bet;
let p1Guess;
let p2Guess;
let p1Multiplier;
let p2Multiplier;
let p1Diff;
let p2Diff;
let superTieCount = 0;
let superTieMultiplier = 2;
let round = 1;
let p1Points = 50;
let p2Points = 50;
let jackpot = 100;
let p1RoundsWon = 0;
let p2RoundsWon = 0;
let gameWinner = '';
let roundWinner;
let numbox;
let highScore;
let randomNum = function () {
    return Math.floor(Math.random()*(9)+1);
}
let randomMultiplier = function() {
  return Math.floor(Math.random()*(3)+1);
}
let pcPlay = function() {
  p2Bet = randomNum();
  p2Guess = randomNum();
  p2Multiplier = randomMultiplier();
  p2Ready.disabled = true;
}

// DOM MANIPULATION

document.querySelector('.p1name').innerHTML = p1;
document.querySelector('.p2name').innerHTML = p2;
let jackpotDisplay = document.querySelector('.jackpot');
jackpotDisplay.innerHTML = `Jackpot: ${jackpot}`;
let scoreboard = document.querySelector('.scoreboard');
const numButtons = document.querySelector('.numbers');
let p1Score = document.querySelector('.p1points');
let p2Score = document.querySelector('.p2points');
p1Score.innerHTML = `Points: ${p1Points}`;
p2Score.innerHTML = `Points: ${p2Points}`;
const p1BetBox = document.querySelector('[name="p1bet"]');
const p1GuessBox = document.querySelector('[name="p1guess"]');
const p1MultiplierBox = document.querySelector('.p1multiplier');
let p1Ready = document.querySelector('[name="p1ready"]');
const p2BetBox = document.querySelector('[name="p2bet"]');
const p2GuessBox = document.querySelector('[name="p2guess"]')
const p2MultiplierBox = document.querySelector('.p2multiplier')
let p2Ready = document.querySelector('[name="p2ready"]');
let playButton = document.querySelector('[name="play"]');
winnerBox = document.querySelector('.winner');
let gameWinnerBox = document.querySelector('.gamewinner');
let roundDisplay = document.querySelector('.round');
roundDisplay.innerHTML = `Round: ${round}`;
let p1Row = document.querySelector('.p1row');
let p2Row = document.querySelector('.p2row');
let roundRow = document.querySelector('.roundrow');

// document.addEventListener('DOMContentLoaded', function() {
// GAME FUNCTIONALITY

function playButtonEnable() {
  playButton.innerHTML = "PLAY!"
  playButton.disabled = false;
}
function playButtonDisable() {
  playButton.innerHTML = "Waiting..."
  playButton.disabled = true;
}

function targetClick(event) {
  if (event.target.className.includes('numbox')) {
    numbox = event.target;
  }
  if (/[1-9]/g.test(event.target.innerText)) {
    number = event.target.innerText;
    numbox.value = number;
  }
  if (event.target.name === 'p1ready') {
    event.preventDefault();
    p1Bet = parseFloat(p1BetBox.value);
    p1Guess = parseFloat(p1GuessBox.value);
    p1Multiplier = parseFloat(p1MultiplierBox.value);
    p1BetBox.value = '';
    p1GuessBox.value = '';
    p1Ready.disabled = true;
  }
  if (event.target.name === 'p2ready') {
    event.preventDefault();
    p2Bet = parseFloat(p2BetBox.value);
    p2Guess = parseFloat(p2GuessBox.value);
    p2Multiplier = parseFloat(p2MultiplierBox.value);
    p2BetBox.value = '';
    p2GuessBox.value = '';
    p2Ready.disabled = true;
  }
  if (p1Ready.disabled === true && p2Ready.disabled === true) {
    playButtonEnable();
  }
}

playButton.addEventListener('click', playGame);
document.addEventListener('click', targetClick);

function playGame() {
  pcPlay();
  findRoundWinner();
  isGameOver();
  scoreBoard();
  //insert timeout
}

function findRoundWinner() {
  p1Diff = Math.abs(p1Guess - p2Bet);
  p2Diff = Math.abs(p2Guess - p1Bet);
  if (p1Diff < p2Diff) {
    p1RoundsWon++;
    superTieMultiplier = 2;
    p1Points += (p2Bet * p2Multiplier) - (p1Multiplier * p1Diff);
    p2Points -= p2Bet * p2Multiplier;
    jackpot += (p1Multiplier * p1Diff) + (p2Multiplier * p2Diff);
    roundWinner = p1;
  } else if (p1Diff > p2Diff) {
    roundWinner = p2;
    p2RoundsWon++;
    superTieMultiplier = 2;
    p2Points += (p1Bet * p1Multiplier) - (p2Multiplier * p2Diff);
    p1Points -= p1Bet * p1Multiplier;
    jackpot += (p1Multiplier * p1Diff) + (p2Multiplier * p2Diff);
  } else if (p1Diff === p2Diff && (p1Guess === p2Bet && p2Guess === p1Bet)) {
    roundWinner = 'SUPER TIE!!!';
    p1Points += (p1Bet * p1Multiplier) * superTieMultiplier;
    p2Points += (p2Bet * p2Multiplier) * superTieMultiplier;
    jackpot = jackpot * superTieMultiplier;
    superTieMultiplier++;
  } else {
    roundWinner = "TIE";
    p1Points -= p1Bet * p1Multiplier;
    p2Points -= p2Bet * p2Multiplier;
    jackpot += (p1Bet * p1Multiplier) + (p2Bet * p2Multiplier);
  }
  p1Ready.disabled = false;
  p2Ready.disabled = false;
}

function showResults() {
  if (round === 1) {
    winnerBox.innerHTML = `${p1} was off by ${p1Diff}<br>
                           ${p2} was off by ${p2Diff}<br>
                          Round 1 winner: ${roundWinner}`;
  } else {
    winnerBox.innerHTML = `${p1} was off by ${p1Diff}<br>
                           ${p2} was off by ${p2Diff}<br>
                           Round ${round} winner: ${roundWinner}`;
  }
  p1Score.innerHTML = `Points: ${p1Points}`;
  p2Score.innerHTML = `Points: ${p2Points}`;
  jackpotDisplay.innerHTML = `Jackpot: ${jackpot}`;
  roundDisplay.innerHTML = `Round: ${round+1}`
}

function isGameOver() {
  if (p1RoundsWon > 5 || p2Points < 10) {
    gameWinner = p1;
    p1Points += jackpot;
    highScore = p1Points;
    jackpot = 0;
    p1Score.innerHTML = `Points: ${p1Points + jackpot}`;
    gameWinnerBox.innerHTML = `${p1} Wins the pot!`;

  } else if (p2RoundsWon > 5 || p1Points < 10) {
    gameWinner = p2;
    p2Points += jackpot;
    highScore = p2Points;
    jackpot = 0;
    p2Score.innerHTML = `Points: ${p2Points + jackpot}`;
    gameWinnerBox.innerHTML = `${p2} Wins the pot!`;
  } else {
    showResults();
    round += 1;
    playButtonDisable();
    pcPlay();
  }
}

function scoreBoard() {
  if (roundWinner === p1) {
    p1Row.appendChild(document.createElement("div"))
    .className = "win";
    p2Row.appendChild(document.createElement("div"))
    .className = "lose";
  } else if (roundWinner === p2) {
    p1Row.appendChild(document.createElement("div"))
    .className = "lose";
    p2Row.appendChild(document.createElement("div"))
    .className = "win";
  } else {
    p1Row.appendChild(document.createElement("div"))
    .className = "tie";
    p2Row.appendChild(document.createElement("div"))
    .className = "tie";
  }
}

// LOCAL STORAGE //

function leaderBoard() {
  localStorage.setItem('gameWinner', gameWinner);
  localStorage.setItem('highScore', highScore);
}


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
  }
}
pcPlay();
playButton.innerHTML = "Waiting..."
playButton.disabled = true;
disableKeys();
// });
