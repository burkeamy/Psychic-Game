//document.addEventListener('DOMContentLoaded', guessLetter);

var wins = 0;
var losses = 0;
var guessesLeft = 9
var randomLetter;
var guessed = [];

function guessLetter () {
    
        var random = Math.floor(Math.random() * (122-97) + 97);
        randomLetter = String.fromCharCode(random);
        console.log(randomLetter);
            
        //this is supposed to create a random whole number between 65 and 90; and convert it to a letter using unicode
}
guessLetter();

document.addEventListener("keydown", whatLetter);

function whatLetter(event) {
    if (guessed.indexOf(event.key.toLowerCase())===-1){

    var guess = event.key.toLowerCase();
            //var guess = document.getElementById("guessed").innerHTML = key;
          console.log(guess);
        // this allows the user to input a letter

       
            guessed.push(guess);
            document.getElementById("guessed").innerHTML = guessed;
            console.log(guessed);
        //this is supposed to push the guess into an array
         

    if (guess === randomLetter) {
        wins++;
       document.getElementById("wins").innerHTML = ("wins = " + wins);
       document.getElementById("num").innerHTML = guessesLeft = 9;
       guessed = []; 
       guessLetter();
        /*this is supposed to compare the guess from the user to the random creted and, if correct resets the
        guesses to 9 and increases the wins*/
        }
    else if (guessesLeft === 0) {
        losses++;
        document.getElementById("lose").innerHTML = ("Losses =  " + losses); 
        document.getElementById("num").innerHTML = guessesLeft = 9;
        guessed = [];
        guessLetter();
        // this is supposed to return the guesses left back to 9 and reset the game
        
        }
    else {
        guessesLeft--;
        document.getElementById("num").innerHTML = "Guesses  left = " + guessesLeft;       
        }
     //this is supposed to increases losses by one and decreases guesses left by one
    //}
  }
}
