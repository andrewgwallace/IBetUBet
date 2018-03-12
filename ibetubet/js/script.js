// DOM Element assignment and manipulation

document.addEventListener('DOMContentLoaded', function() {

  let imported = document.createElement('script');
  imported.src = 'js/game.js';


  let scoreboard = document.querySelector('.scoreboard');
  let numButtons = document.querySelector('.numbers');
  let numBoxes = document.querySelectorAll('.numbox');
  let p1GuessBox = document.querySelector('input[name="p1guess"]');
  let p2BetBox = document.querySelector('input[name="p2bet"]');
  let p2GuessBox = document.querySelector('input[name="p2guess"]');
  let p1Ready = document.querySelector('input[name="p1ready"]');
  let p2Ready = document.querySelector('input[name="p2ready"]');
  let numbox;
  document.head.appendChild(imported);

  function targetClick(event) {
    if (event.target.className.includes('numbox')) {
      numbox = event.target;
      console.log(numbox);
    }
    if (/[1-9]/g.test(event.target.innerText)) {
      console.log(numbox);
      number = event.target.innerText;
      numbox.value = number;
    }

    return;
      // console.log(event.target);
    // let number = event.target.innerHTML;
    // field.value = number;
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


disableKeys();
});
