     // * The options are the letters of the alphabet
     var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
     var userChoiceArray = [];

     // Create variables that hold references to the places in the HTML where we want to display things
     var directionsText = document.getElementById("directions");
     var userChoice = document.getElementById("userchoice");
     var winsText = document.getElementById("wins");
     var lossesText = document.getElementById("losses");
     var guessesLeft = document.getElementById("guesses-left");
     var guessesMade = document.getElementById("guesses-made");
     


     // * The game starts with Wins and Losses at 0 and 9 lives
     var wins, losses, lives, computerSelect

     function resetVariables() {
         wins = 0;
         losses = 0;
         lives = 9;

    // * Computer makes a selection from the array
     computerSelect = computerChoices[Math.floor(Math.random() * computerChoices.length)]
     console.log(computerSelect);
     }

     resetVariables()

     // * The game begins when the user clicks a key 
     document.onkeyup = function (event) {

         // * When the user clicks any alphabet key, the computer will populate a win or a loss based on whether the user guessed correctly
         console.log(event);

         var userGuess = event.key;
         userChoiceArray.push(userGuess)
         


         // * All guesses are logged "Your Guesses so far"

         // * If user guesses wrong, the losses goes up by 1 and the lives go down by 1. If user guesses right, the wins go up by 1 
         if (userGuess === computerSelect) {
             wins++;
             computerSelect = computerChoices[Math.floor(Math.random() * computerChoices.length)];
             userChoiceArray = [];
             console.log(computerSelect);
             




             // * After every win, the computer will select a new letter

             // * Display wins and losses 

         } else {
             losses++;
             lives--
         };
         guessesMade.textContent = "Your Guesses so far: " + userChoiceArray;
         winsText.textContent = "wins: " + wins;
         lossesText.textContent = "losses: " + losses;
         guessesLeft.textContent = "Lives: " + lives;

         if (lives === 0) {
            if ( confirm("You lost! Do you want to play again?")) {
                resetVariables()
            }
         }
     }