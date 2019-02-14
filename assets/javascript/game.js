// * The options are the letters of the alphabet
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userChoiceArray = [];

// Create variables that hold references to the places in the HTML where we want to display things
var directionsText = document.getElementById("directions");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeft = document.getElementById("guesses-left");
var guessesMade = document.getElementById("guesses-made");



// * The game starts with Wins and Losses at 0 and 9 lives
var wins, losses, lives, computerSelect
wins = 0;
losses = 0;

function resetVariables() {
  lives = 9;
  userChoiceArray = [];

  guessesMade.textContent = "Guesses Made: " + userChoiceArray;
  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  guessesLeft.textContent = "Guesses Left " + lives;

  // * Computer makes a selection from the array
  computerSelect = computerChoices[Math.floor(Math.random() * computerChoices.length)]
  //  console.log(computerSelect);
}

resetVariables()

// * The game begins when the user clicks a key 
document.onkeyup = function (event) {

  // * When the user clicks any alphabet key, the computer will populate a win or a loss based on whether the user guessed correctly
  //  console.log(event);

  var userGuess = event.key;
  userChoiceArray.push(userGuess)



  // * If user guesses right, the wins go up by 1 
  // * After every win, the computer will select a new letter,

  if (userGuess === computerSelect) {
    wins++;
    userChoiceArray = [];
    if (confirm("You won!!! Do you want to play again?")) {
      resetVariables()
    }
    
    
  } else {
    lives--
  };
  
  // * Display wins and losses 
  guessesMade.textContent = "Guesses Made: " + userChoiceArray;
  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  guessesLeft.textContent = "Guesses Left: " + lives;

  // * If user guesses wrong, the losses goes up by 1 and the lives go down by 1. 
  if (lives === 0) {
    losses++;
    if (confirm("You lost! Do you want to play again?")) {
      resetVariables()
    }
  }
}