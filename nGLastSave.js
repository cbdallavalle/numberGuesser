
//Default min and max
var min =  0;
var max = 100;

//Default chooses random number
function chooseRandom() {
  var chooseNum = Math.floor((Math.random() * max - min) + 1);
  console.log(chooseNum);
  return chooseNum
}

var randomNum = chooseRandom();

//Reset the random number when a new minimum and maximum are given
var inputForm = document.getElementById('input-form');
var enterButton = document.querySelector('.enter-min-max');

enterButton.addEventListener('click', function() {
  enter();
  findNewRandom();
});

function findNewRandom() {
  randomNum = chooseRandom();
}

//Enter own min and max
function enter() {
  event.preventDefault();
  min = parseInt(document.getElementById('enter-min').value);
  max = parseInt(document.getElementById('enter-max').value);
  displayMin.innerText = min;
  displayMax.innerText = max;
  // console.log(min, max);
}

//Variables target the numerical values between Guess the number between 0 and 100
var displayMin = document.querySelector('.min-value');
var displayMax = document.querySelector('.max-value');

//clear input field on click
var clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clear);

function clear() {
  // console.log('submit clear function working');
   input.value = '';
   ul.innerText = '0';
   disableClear();
 }

//Disable clear button when nothing to clear
var input = document.getElementById('enter-guess');
input.addEventListener('keyup', disableClear);

  function disableClear() {
    // console.log(input.value)
  if (input.value === '') {
    clearButton.disabled = true;
    // console.log('if disabled is running');
  }

  else {
   clearButton.disabled = false;
   // console.log('else disabled is running')
  }
}


//reset button will reload the page, effectively re-running the randomNumber function and returning display to 0
var resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', reset);

function reset() {
  window.location.reload(true);
  disableReset();
  ul.innerText= "0";
}

//Disable reset button upon load
input.addEventListener('keyup', disableReset);

  function disableReset() {
  if (input.value === '') {
    resetButton.disabled = true;
    // console.log('if disabled is running');
  }

  else {
   resetButton.disabled = false;
   // console.log('else disabled is running')
  }
}

//When Guess button is pressed, takes the input value and compares it to the chosen random number.
var ul = document.querySelector('ul');
var guessButton = document.querySelector('.guess-button');

var hints = document.getElementById('hints');
var lastGuessStr = document.querySelector('.last-guess-str');

guessButton.addEventListener('click', function(e){ 
  e.preventDefault();
  console.log("I am checking to see if enter button is working", e);
  submit();
});

 function submit() {
   console.log('submit function running');
   var numString = input.value;
   ul.innerText = numString;
   
    var userNum = parseInt(numString);
    console.log(userNum);

    //Checks to see if user number is between min and max, and whether it is NaN
    if (isNaN(parseInt(numString))) {
        lastGuessStr.innerText = 'Don\'t mess with me.';
        ul.innerText = '(-_-)';
        hints.innerText = 'I know that\'s not a number!';
       return;
      }

    else if (userNum > max) {
      lastGuessStr.innerText = 'Your guess is too big';
      ul.innerText = '0';
      hints.innerText = '';
      return;
    }
    else if (userNum < min) {
      lastGuessStr.innerText = 'Your guess is too small';
      ul.innerText = '0';
      hints.innerText = '';
      return;
    }

    //If number is between min and max, displays hints
    else {
      
      if (userNum === randomNum) {
        lastGuessStr.innerText = 'Your last guess was';
        hints.innerText = 'BOOM!';
        uponSuccess();
         }
      else if (userNum > randomNum) {
        lastGuessStr.innerText = 'Your last guess was';
        hints.innerText = 'That is too high';
          }
      else {
        lastGuessStr.innerText = 'Your last guess was';
        hints.innerText = 'That is too low';
      }
    }
  }

function display0() {
  var ulDisplay = ul.innerText;
  var ulDisplay0 = 0;
}

function uponSuccess () {
  min = min - 10;
  max = max + 10;
  randomNum = chooseRandom();
  displayMin.innerText = min;
  displayMax.innerText = max;
  lastGuessStr.innerText = 'Try again! It\' harder this time, though...';
  setTimeout(function() 
    { ul.innerText = 0;
      hints.innerText = '';
    }, 1500);
    }
