document.addEventListener('DOMContentLoaded',guessLetter);

var wins = 0;
var losses = 0;
var guessesLeft = 9

function guessLetter(letter) {
for (var i = 0; i < 9; i --) {
    //var possible = "abcdefghijklmnopqrstuvwxyz"
    var letter = Math.floor(Math.random() * 26);
    var guess = text.addEventListener('keydown', anyKey); {
        function anyKey(key){
            guess.push[key];
        }
    if (guess === letter) {
        wins ++;
    }
    else {
        losses ++;
    }
    }

}

    
    
}
