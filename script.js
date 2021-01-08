const hangmanDisplay = document.getElementById("hangman-image");
const wordDisplay = document.getElementById("word");
const guessedLettersDisplay = document.getElementById("letters");
let incorrect = 0;
let wordLength = 0;
let letters = [];
let guess = [];
let nameArray = [];
let lettersToFill = [];
let streakScore = 0;
let highScore = 0;

// Start the game and load basic values
document.addEventListener("DOMContentLoaded", startGame());
function startGame() {
    // Reset values
    incorrect = 0;
    wordLength = 0;
    letters = [];
    guess = [];
    nameArray = [];
    lettersToFill = [];

    pos1 = String.fromCharCode(Math.floor(Math.random() * 22) + 65);
    console.log("Letter Category: " + pos1);

    letterCategory = words[pos1];
    console.log(letterCategory);

    pos2 = Math.floor(Math.random() * letterCategory.length);
    countryName = letterCategory[pos2];
    console.log("Country Name: " + countryName);

    for (i = 0; i < countryName.length; i++) {
        if (i == 0) {
            guess.push(countryName[i]);
        } else if (countryName[i].match(/[a-zA-Z]/)) {
            guess.push("_");
        } else if (countryName[i] == " ") {
            guess.push("&nbsp");
        } else {
            guess.push(countryName[i]);
        }
        nameArray.push(countryName[i]);
    }

    console.log(guess);
    console.log(nameArray);
    console.log("Guess is: " + guess.join(" "));

    document.getElementById("wordthing").innerHTML = guess.join(" ");
    document.getElementById("letters").innerHTML = "";
    document.getElementById("wincounter").innerHTML = "Hot Streak: " + streakScore;
    document.getElementById("highscore").innerHTML = "Highscore: " + highScore;

    document.getElementById("hangman-image").innerHTML = hangman[0].replace(
        / /g,
        "&nbsp;"
    );
}


// Function to play the game
function play(e) {
    var char = String.fromCharCode(e);
    console.log(char.toLowerCase());
    console.log(char);
    if (nameArray.includes(char.toLowerCase()) || nameArray.includes(char.toUpperCase())) {
        for (i=0; i < nameArray.length; i++) {
            if (nameArray[i] == char.toLowerCase() || nameArray[i] == char.toUpperCase()) {
                guess[i] = nameArray[i];
            }
        }
        
        console.log("Guess is: " + guess.join(" "));
        document.getElementById("wordthing").innerHTML = guess.join(" ");

        if (!guess.includes("_")) {
            streakScore += 1;
            if (streakScore > highScore) {
                highScore = streakScore;
            }

            setTimeout(() => {
                alert("You won!");
                startGame();
            }, 10);
        }
    } 
    else {
        incorrect += 1;
        document.getElementById("hangman-image").innerHTML = hangman[incorrect].replace(
            / /g,
            "&nbsp;"
        );

        // Add letter to guessed letters
        if (!letters.includes(char.toUpperCase())) {
            letters.push(char.toUpperCase());
            document.getElementById("letters").innerHTML = letters.join(" ");
            console.log(letters);
        }
    }

    if (incorrect == 6) {
        streakScore = 0;
        setTimeout(() => {
            alert("You lose" + "\nThe word was: " + countryName);
            startGame();
        }, 10);
    }
}


// Gets key clicked, idk how else to do this
document.addEventListener("keydown", function (event) {
    // Get user input as x
    var x = event.which;

    // Log the value of x and call the function play if user key input is a letter
    if (64 < x && 91 > x) {
        console.log(x);
        play(x);
    }
});
