// set my starter values
// var randoNum = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var loses = 0;
var guesses = 9;
var yoGuesses = [];

var bands = ["madonna", "journey", "beatles", "metallica", "zeppelin"];
var oneBand = '';
var bandArray = [];

var underScores = [];

// Store number of found letters
var lettersFound = 0;


//********* */
reset();
/******* */


function reset() {
    oneBand = bands[Math.floor(Math.random() * bands.length)];
    bandArray = oneBand.split('');
    underScores = [];
    for (var i = 0; i < bandArray.length; i++) {
        // under_scores = under_scores + '_';
        underScores.push("_");
    }
    lettersFound = 0;
}



document.getElementById("blanks").innerHTML = underScores.join(' ');

document.onkeyup = function (event) {

    var letter = event.key;

    
    // console.log("Position of letter: " + posOfLetter);
    
    for (var i = 0; i < bandArray.length; i++) {
        // get (1st) character in array
        var char = bandArray[i];
        
       // Does character match 'letter'
        if (char === letter) {
            lettersFound = lettersFound + 1;
            
            // _ _ d _ _ _ _
            underScores[i] = letter;
            
            // m a _ o n n a
            bandArray[i] = '_';
        }
        // keep checking (next loop)
    }
    console.log(underScores);
    console.log(bandArray);


    if (lettersFound === bandArray.length) { 
        wins++;
        reset();
    }
    
    document.getElementById('wins').innerText = "Wins: " + wins;
    document.getElementById('blanks').innerText = underScores.join(' ');
};



// document.onkeyup = function (event) {
//     var youPressed = event.key;
//     var computerGuess = randoNum[Math.floor(Math.random() * randoNum.length)];

//     console.log('You pressed:' + youPressed);
//     console.log('The computer guessed:' + computerGuess);

//     if (youPressed === computerGuess) {
//         wins++;
//         guesses = 9;
//         yoGuesses = [];
//         document.getElementById("wins").innerHTML = "Wins: " + wins;
//     }
//     else if (youPressed !== computerGuess) {
//         // Reduce guess count
//         guesses--;
//         yoGuesses.push(" " + youPressed); // abc, d
//         // Determine the value of guess
//         // If 0, then do stuff
//         if (guesses === 0) {
//             // Reset guesses, reset guess to 9, display info
//             yoGuesses = [];
//             guesses = 9;
//             loses++;
//         }
//         console.log('yoGuesses: ' + yoGuesses);
//         document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
//         document.getElementById("yourFailures").innerHTML = "Your guesses so far: " + yoGuesses;
//         document.getElementById("losses").innerHTML = "Losses: " + loses;
//     }
//     // Display
// }