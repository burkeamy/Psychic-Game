document.addEventListener('DOMContentLoaded', guessLetter);

var wins = 0;
var losses = 0;
var guessesLeft = 9

function guessLetter () {
    //for (var i = 0; i < 9; i --) {
    
        var random = Math.floor(Math.random() * (91-65) + 65);
        var randomLetter = String.fromCharCode(random);
            
        //this is supposed to create a random whole number between 65 and 90; and convert it to a letter using unicode

        document.getElementById("kp").addEventListener("keydown", whatLetter);

         function whatLetter(key) {
          var guess = document.getElementById("kp").innerHTML = key;
        // this allows the user to input a letter

       var guessed = [];
            guessed.push[guess];
            document.write[guess]
        //this is supposed to push the guess into an array
         

    if (guess === randomLetter) {
       document.getElementById(win).innerHTML = wins ++;
       document.getElementById(num).innerHTML = guessesLeft = 9
        /*this is supposed to compare the guess from the user to the random creted and, if correct resets the
        guesses to 9 and increases the wins*/
        }
    else if (guessesLeft === 0) {
        document.getElementById(num).innerHTML = guessesLeft = 9;
        guessed = []
        // this is supposed to return the guesses left back to 9 and reset the game
        
        }
    else {
        document.getElementById(lose).innerHTML = losses ++;
        document.getElementById(num).innerHTML = guessesLeft --        
        }
     //this is supposed to increases losses by one and decreases guesses left by one
    //}
  }
}
