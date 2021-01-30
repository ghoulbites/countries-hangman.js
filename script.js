// Variable Declarations
// Playing the Game
let categoriesMasterList = [];
let wordsFromCategoryChosenList = [];
let incorrectGuessedLettersList = [];
let currentGuessesCharsList = [];
let countryNameLettersList = [];
let hintsList = [];
let randomWordChosenString = "";

// Variable for Keeping Track of Number of Incorrect Guesses so Far
let incorrectGuessesMadeInt = 0;

// Variables for Keeping Score
let streakScoreInt = 0;
let highestStreakInt = 0;
let highScoreInt = 0;

// Variables for keeping track of repeated words
let tempReturnedList = [];
let tempCategoryInt = 0;
let tempWordString = "";
let previousThreeCategoriesList = [];
let previousChosenWordString = "";


// Functions to set words category (Triggered solely by button clicks)
function loadCountries() {
    categoriesMasterList = categories.countries; // same as categories["countries"]
    console.log(categoriesMasterList);
    hintsList = hints.countries;
    console.log(hintsList);
    
    loadGameDisplay();
    startGame();
}
function loadAnimals() {
    categoriesMasterList = categories.animals; // same as categories["countries"]
    console.log(categoriesMasterList);
    hintsList = hints.animals;
    console.log(hintsList);
    
    loadGameDisplay();
    startGame();
}


// Main Functions for the Game
// Functions for Button Interactions
function loadGameDisplay() {
    document.getElementById("topic-menu").style.display = "none";
    document.getElementById("game-display").style.display = "grid";
}

function loadTopicsMenu() {
    document.getElementById("topic-menu").style.display = "flex";
    document.getElementById("game-display").style.display = "none";

    resetGamePlusStreakScore();
    // Needs an option of a hard reset for resetting the high score too, but thats for later
    // Currently, the high score is tracked when returning to the topic menu
    
    // Debug Loggings
    /*
    console.log("Resetting Game");
    console.log("Words List from Topic: " + wordsFromCategoryChosenList);
    console.log("Incorrect Letters: " + incorrectGuessedLettersList);
    console.log("Current Guesses: " + currentGuessesCharsList);
    console.log("Letters of Current Word: " + countryNameLettersList);
    console.log("Current Streak: " + streakScoreInt);
    console.log("Number of incorrect guesses: " + incorrectGuessesMadeInt);
     */
}


// Resetting the game variables
// Simple Reset
function resetGame() {
    incorrectGuessedLettersList = [];
    currentGuessesCharsList = [];
    countryNameLettersList = [];
    incorrectGuessesMadeInt = 0;
    randomWordChosenString = "";

    tempReturnedList = [];
    tempCategoryInt = 0;
    tempWordString = "";
}
// Hard Reset for Streak Score Only
function resetGamePlusStreakScore() {
    resetGame();
    categoriesMasterList = [];
    wordsFromCategoryChosenList = [];
    hintsList = [];
    streakScoreInt = 0;

    previousThreeCategoriesList = [];
    previousChosenWordString = "";
}
// Super Reset for All Scores Too
function resetGamePlusAllScores() {
    resetGamePlusStreakScore();
    highScoreInt = 0;
}


// Updating Text Fields with New Information
function updateText() {
    // Updating Score
    document.getElementById("wincounter").innerHTML = "Streak: " + streakScoreInt;
    document.getElementById("highscore").innerHTML = "High Score: " + highScoreInt;
    document.getElementById("higheststreak").innerHTML = "Best Streak: " + highestStreakInt;

    document.getElementById("hinter").innerHTML = "Hint: " + hintsList[pos1];

    // Updating Image and removes all whitespaces (.replace(/ /g, &nbsp))
    // https://stackoverflow.com/questions/10800355/remove-whitespaces-inside-a-string-in-javascript
    document.getElementById("hangman-image").innerHTML = hangman[incorrectGuessesMadeInt].replace(
        / /g,
        "&nbsp;"
    );

    // Updating Guesses
    document.getElementById("current-word").innerHTML = currentGuessesCharsList.join(" ");

    // Updating Incorrect Letters
    document.getElementById("incorrect-letters").innerHTML = incorrectGuessedLettersList.join(" ");
}


// Starting the Game with Basic Information; Easier to do it this way
// Function to Choose Random Word from Chosen Category of Words
//  Function to choose a word
function randomWordGenerator() {
    // Pick a new random word
    // Picking inner category from chosen word category by button click earlier
    innerListLength = categoriesMasterList.len; // same as categories["len"]
    pos1 = Math.floor(Math.random() * innerListLength);
    console.log("DEBUG - TOPIC INNER CATEGORY INDEX TO BE CHOSEN:", pos1);
    console.log("DEBUG - TOPIC INNER CATEGORY INDEX TO BE CHOSEN(Based on Hint):\n", hintsList[pos1]);

    letterCategory = categoriesMasterList[pos1];
    console.log("DEBUG - TOPIC INNER CATEGORY CHOSEN LIST: \n", letterCategory);

    pos2 = Math.floor(Math.random() * letterCategory.length);
    randomWordChosenString = letterCategory[pos2];
    console.log("DEBUG - RANDOM WORD CHOSEN:", randomWordChosenString);

    if ((randomWordChosenString != previousChosenWordString) &&
        (!previousThreeCategoriesList.includes(pos1)))
    {
        console.log("passed");
        returnList = [];
        returnList.push(pos1);
        returnList.push(randomWordChosenString);
        return returnList;
    }
    else
    {
        console.log("should be repeated");
        return randomWordGenerator();
    }
}

//  Funciton to choose the word
function chooseWordToGuess() {
    tempReturnedList = randomWordGenerator();
    tempCategoryInt = tempReturnedList[0];
    tempWordString = tempReturnedList[1];
    // Debug Console Logging
    /*
    console.log("DEBUG - RETURNED LIST TO CHOOSE WORD:", tempReturnedList);
    
    console.log("DEBUG - CATEGORY RETURNED:", tempCategoryInt);
    
    console.log("DEBUG - WORD RETURNED:", tempWordString);

    console.log("DEBUG - PREVIOUS WORD (Before):", previousChosenWordString);
    console.log("DEBUG - LIST OF THREE PREVIOUS CATEGORIES (Before)", previousThreeCategoriesList);
     */

    // Changing the previous word
    if (randomWordChosenString != previousChosenWordString) {
        previousChosenWordString = tempWordString;
    }

    // Updating the list of previous categories
    if (previousThreeCategoriesList.length == 3) {
        previousThreeCategoriesList.splice(0, 1);
        previousThreeCategoriesList.push(tempCategoryInt);
    }
    else
    {
        previousThreeCategoriesList.push(tempCategoryInt);
    }

    // Debug Console Logging
    /**/
    console.log("DEBUG - PREVIOUS WORD (After):", previousChosenWordString);
    console.log("DEBUG - LIST OF THREE PREVIOUS CATEGORIES (After)", previousThreeCategoriesList);
    

    // Generating the list with underscores for the current guesses
    for (i = 0; i < randomWordChosenString.length; i++) {
        if (randomWordChosenString[i].match(/[a-zA-Z]/)) // Checking if its a single letter from a-z or A-Z
        {
            currentGuessesCharsList.push("_");
        }
        else if (randomWordChosenString[i] == " ") // Checking if its just a space
        {
            currentGuessesCharsList.push("&nbsp"); // "&nbsp" is the html equivalent of a space
        } 
        else 
        // checks for any other special character (probably can break the html)
        // needs fixing but later not now
        {
            currentGuessesCharsList.push(randomWordChosenString[i]);
        }

        // Generates a list with the real letters in their appropriate places; idk why :/
        // maybe I just don't remember
        countryNameLettersList.push(randomWordChosenString[i]);
    }

    // If the first letter of the word is also present in other places in the word, replace those places with the letter
    for (x = 0; x < countryNameLettersList.length; x++)
    {
        if (countryNameLettersList[x] == randomWordChosenString[0].toLowerCase() ||
            countryNameLettersList[x] == randomWordChosenString[0].toUpperCase()) 
        {
            currentGuessesCharsList[x] = countryNameLettersList[x];
        }
    }
}



function startGame() {
    // Soft reset the game in all cases to prevent misinformation
    resetGame();

    // Choose Word
    chooseWordToGuess();

    // Update display with new Information
    updateText();
}

function play(key) {
    letter = String.fromCharCode(key);

    // Checking if the letter entered is a valid letter
    if (countryNameLettersList.includes(letter.toLowerCase()) ||
        countryNameLettersList.includes(letter.toUpperCase()))
    {
        // Replaces the "_" in the guess list with the appropriate letter(s)
        for (i = 0; i < countryNameLettersList.length; i++)
        {
            if (countryNameLettersList[i] == letter.toLowerCase() ||
                countryNameLettersList[i] == letter.toUpperCase()) 
            {
                currentGuessesCharsList[i] = countryNameLettersList[i];
            }
        }
        
        // DEBUG
        console.log("Guess is: " + currentGuessesCharsList.join(" "));
    } 
    else // Checks if the letter is not a valid letter
    {
        incorrectGuessesMadeInt += 1;

        // Adds the letter capitalized to the list containing incorrect guesses
        letter = letter.toUpperCase();
        incorrectGuessedLettersList.push(letter);
    }

    // Update text anyway
    updateText();

    // If player wins
    if (!currentGuessesCharsList.includes("_"))
    {
        // Increase streak
        streakScoreInt += 1;
        if (streakScoreInt > highestStreakInt)
        {
            highestStreakInt = streakScoreInt;
        }
        
        // Increase Score
        highScoreInt += 1;

        setTimeout(() => {
            alert("You won!");
            return startGame();
        }, 10);
    }
    
    // If player loses
    if (incorrectGuessesMadeInt == 6)
    {
        // Reset Streak to 0
        streakScoreInt = 0;
        setTimeout(() => {
            alert("You lose" + "\nThe word was: " + randomWordChosenString);
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

