//Various global variables
var ul = document.querySelector('ul');
var hints = document.getElementById('hints');
var lastGuessStr = document.querySelector('.last-guess-str');

//Default min and max
var min =  0;
var max = 100;

//Random Number used in rest of functions
var randomNum = chooseRandom();

//Default chooses random number
function chooseRandom() {
  var chooseNum = Math.floor((Math.random() * max - min) + 1);
  // TO CHEAT ENABLE ;) 
  console.log(chooseNum);
  return chooseNum
}

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
   input.value = '';
   ul.innerText = '0';
   disableClear();
 }

//Disable clear and reset button when nothing to clear/reset
var input = document.getElementById('enter-guess');
input.addEventListener('keyup', function() {
    disableClear();
    disableReset();
  });

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

//reset button will reload the page, effectively re-running the randomNumber function and returning display to 0
var resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', reset);

function reset() {
  window.location.reload(true);
  disableReset();
  ul.innerText= "0";
}

//When Guess button is pressed, takes the input value and compares it to the chosen random number.
var guessButton = document.querySelector('.guess-button');

guessButton.addEventListener('click', function(e){ 
  e.preventDefault();
  // console.log("I am checking to see if enter button is working", e);
  submit();
  randomizeAnimals();
  createAnimals();
});

 function submit() {
   // console.log('submit function running');
   var numString = input.value;
   ul.innerText = numString;
   
    var userNum = parseInt(numString);
    // console.log(userNum);

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

//sets the pink display of the user number to 0
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
  lastGuessStr.innerText = 'Try again! It\'s harder this time, though...';
  setTimeout(function() 
    { ul.innerText = 0;
      hints.innerText = '';
    }, 1500);
    }



var barnArray = [
    "https://openclipart.org/download/48547/krowa.svg", 
    "https://openclipart.org/download/210154/inhabitants-npc-piggy.svg",
    "https://openclipart.org/download/284215/publicdomainq-0000586ukgunb.svg",
    "https://openclipart.org/download/247819/goat_white.svg",
    "https://openclipart.org/download/274644/Pastel-Unicorn.svg",
    "https://openclipart.org/download/45673/PUP2.svg"
]
// var cow = document.querySelector('.cow');
// cow.style.visibility = 'hidden'
// var pig = document.querySelector('.pig);');

var section = document.querySelector('section');
section.style.visibility = "hidden";

var container = document.getElementById('barnyard');
container.setAttribute('class', 'barnyard')

var animalButton = document.querySelector('.animal-button');

var animalRandomNum = 0;

function animalCountRight() {
  
  animalNum = parseInt(animalInput.value);
  if (animalNum == animalRandomNum) {
    console.log('hi!')
    section.style.visibility = "hidden";
    guessButton.disabled = false;
  }
}


var animalInput = document.querySelector('#enter-animal-number');
var cownter = document.querySelector('.animal-button');
cownter.addEventListener('click', function(){
  animalCountRight();
  removeAnimals();
});



//function to delete all images in container, remove attributes
// function removeAnimals(){
//   var newAnimalImgs = document.querySelectorAll('img');
//   var animalArr = []
//   // var l = newAnimalImgs; //newAnimalImgs.length
  
  
//   for (var i = 0; i < 6; i++) {
//     animalArr.pop(newAnimalImgs);
//     console.log(animalArr);
//     newAnimalImgs[0].parentNode.removeChild[0];
   
//   }
//   // document.querySelector('.animals').className = "oldAnimals";
// };


function createAnimals() {    
  section.style.visibility = "visible";
  
  for (var i = 0, j = animalRandomNum; i < j; i++) {
      var animalImg = document.createElement('img');
      animalImg.setAttribute('class', 'animals');
      animalImg.src = barnArray[i]; // img[i] refers to the current URL.
      container.appendChild(animalImg);
  guessButton.disabled = true;
  }
};

  function randomizeAnimals() {
    var animalRan = Math.floor((Math.random() * 6) + 1);
    animalRandomNum = animalRan;
    // console.log(animalRan);
  }
