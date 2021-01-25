// Variable Declarations
// Playing the Game
let categoriesListToChooseFrom = [];
let wordsListToChooseFrom = [];
let incorrectLettersList = [];
let currentGuessList = [];
let lettersListForCountryName = [];
let char = "";
let countryName = "";
let lastCategory = "";

// Variables for Keeping Score
let streakScore = 0;
let highScore = 0;

// Variable for Keeping Track of Number of Incorrect Guesses so Far
let incorrectGuesses = 0;


// Functions to set words category (Triggered solely by button clicks)
function loadCountries() {
    categoriesListToChooseFrom = categories.countries; // same as categories["countries"]
    console.log(categoriesListToChooseFrom);
    
    loadGameDisplay();
    startGame();
}
function loadAnimals() {
    categoriesListToChooseFrom = categories.animals; // same as categories["countries"]
    console.log(categoriesListToChooseFrom);
    
    loadGameDisplay();
    startGame();
}


// Main Functions for the Game
function loadGameDisplay() {
    document.getElementById("topic-menu").style.display = "none";
    document.getElementById("game-display").style.display = "grid";
}

function loadTopicsMenu() {
    document.getElementById("topic-menu").style.display = "flex";
    document.getElementById("game-display").style.display = "none";

    resetGamePlusScore();
    /// Needs an option of a hard reset for resetting the high score too, but thats for later
    /// Currently, the high score is tracked

    console.log("Resetting Game");
    console.log("Words List from Topic: " + wordsListToChooseFrom);
    console.log("Incorrect Letters: " + incorrectLettersList);
    console.log("Current Guesses: " + currentGuessList);
    console.log("Letters of Current Word: " + lettersListForCountryName);
    console.log("Current Streak: " + streakScore);
    console.log("Number of incorrect guesses: " + incorrectGuesses);
}


// Updating Text Fields with New Information
function updateText() {
    // Updating Score
    document.getElementById("wincounter").innerHTML = "Streak: " + streakScore;
    document.getElementById("highscore").innerHTML = "High Score: " + highScore;

    // Updating Image and removes all whitespaces (.replace(/ /g, &nbsp))
    // https://stackoverflow.com/questions/10800355/remove-whitespaces-inside-a-string-in-javascript
    document.getElementById("hangman-image").innerHTML = hangman[incorrectGuesses].replace(
        / /g,
        "&nbsp;"
    );

    // Updating Guesses
    document.getElementById("current-word").innerHTML = currentGuessList.join(" ");

    // Updating Incorrect Letters
    document.getElementById("incorrect-letters").innerHTML = incorrectLettersList.join(" ");
}

// Resetting the game variables
function resetGame() {
    wordsListToChooseFrom = [];
    incorrectLettersList = [];
    currentGuessList = [];
    lettersListForCountryName = [];
    incorrectGuesses = 0;
}
function resetGamePlusScore() {
    resetGame();
    streakScore = 0;
}


// Starting the Game with Basic Information; Easier to do it this way
function startGame() {
    resetGame();

    /// Pick a new random word
    // Picking inner category from chosen word category by button click earlier
    innerListLength = categoriesListToChooseFrom.len; // same as categories["len"]
    pos1 = Math.floor(Math.random() * innerListLength);
    /// DEBUG
    console.log("Letter Category: " + String.fromCharCode(pos1 + 65));

    letterCategory = categoriesListToChooseFrom[pos1];
    /// DEBUG
    console.log(letterCategory);

    pos2 = Math.floor(Math.random() * letterCategory.length);
    countryName = letterCategory[pos2];
    /// DEBUG
    console.log("Country Name: " + countryName);

    // Generating the list with underscores for the current guesses
    for (i = 0; i < countryName.length; i++) {
        if (countryName[i].match(/[a-zA-Z]/)) // Checking if its a single letter from a-z or A-Z
        {
            currentGuessList.push("_");
        }
        else if (countryName[i] == " ") // Checking if its just a space
        {
            currentGuessList.push("&nbsp");
        } 
        else // checks for any other special character (probably can break the html)
        // needs fixing but later not now
        {
            currentGuessList.push(countryName[i]);
        }

        // Generates a list with the real letters in their appropriate places; idk why :/
        // maybe I just don't remember
        lettersListForCountryName.push(countryName[i]);
    }

    // If the first letter of the word is also present in other places in the word, replace those places with the letter
    for (x = 0; x < lettersListForCountryName.length; x++)
    {
        if (lettersListForCountryName[x] == countryName[0].toLowerCase() ||
            lettersListForCountryName[x] == countryName[0].toUpperCase()) 
        {
            currentGuessList[x] = lettersListForCountryName[x];
        }
    }

    // Update with new Information
    updateText();
}

function play(key) {
    letter = String.fromCharCode(key);

    // Checking if the letter entered is a valid letter
    if (lettersListForCountryName.includes(letter.toLowerCase()) ||
        lettersListForCountryName.includes(letter.toUpperCase()))
    {
        // Replaces the "_" in the guess list with the appropriate letter(s)
        for (i = 0; i < lettersListForCountryName.length; i++)
        {
            if (lettersListForCountryName[i] == letter.toLowerCase() ||
                lettersListForCountryName[i] == letter.toUpperCase()) 
            {
                currentGuessList[i] = lettersListForCountryName[i];
            }
        }
        
        /// DEBUG
        console.log("Guess is: " + currentGuessList.join(" "));
    } 
    else // Checks if the letter is not a valid letter
    {
        incorrectGuesses += 1;

        // Adds the letter capitalized to the list containing incorrect guesses
        letter = letter.toUpperCase();
        incorrectLettersList.push(letter);
    }

    // Update text anyway
    updateText();

    if (!currentGuessList.includes("_"))
    {
        streakScore += 1;
        if (streakScore > highScore)
        {
            highScore = streakScore;
        }

        setTimeout(() => {
            alert("You won!");
            return startGame();
        }, 10);
    }
    
    if (incorrectGuesses == 6)
    {
        streakScore = 0;
        setTimeout(() => {
            alert("You lose" + "\nThe word was: " + countryName);
            return startGame();
        }, 10);
    }
}


// God save me because I have no fucking idea how or why this even works and won't for probably a very long time still
document.addEventListener("keydown", function (event) {
    // Get user input as x
    var x = event.which;

    // Log the value of x and call the function play if user key input is a letter
    if (64 < x && 91 > x) {
        console.log(x);
        play(x);
    }
});

