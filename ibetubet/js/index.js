let onePlayer = document.querySelector('input[name="p1name"]');
let twoPlayer = document.querySelector('input[name="p2name"]');
let startButton = document.querySelector('#start');
startButton.disabled = true;


document.addEventListener('DOMContentLoaded', function() {
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
    startButton.disabled = true;
    startButton.innerHTML = "Enter player name(s)";
  }
  localStorage.setItem('p1', onePlayer.value);
  localStorage.setItem('p2', twoPlayer.value);
}

});
