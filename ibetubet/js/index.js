document.addEventListener('DOMContentLoaded', function() {

let onePlayer = document.querySelector('input[name="p1Name"]');
let twoPlayer = document.querySelector('input[name="p2Name"]');
let startButton = document.querySelector('#start');
let continueButton = document.querySelector('#continue');
startButton.disabled = true;
continueButton.disabled = true;

onePlayer.addEventListener('change', checkReady);
twoPlayer.addEventListener('change', checkReady);
startButton.addEventListener('click', startGame);

function startGame () {

}

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

});
