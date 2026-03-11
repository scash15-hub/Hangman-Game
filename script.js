//word list
const wordList = [
  'Archery',
  'Badminton',
  'Baseball',
  'Boxing',
  'Cricket',
  'Cycling',
  'Dive',
  'Figure Skating',
  'Field Hockey',
  'Fencing',
  'Golf',
  'Handball',
  'Hockey',
  'Judo',
  'Lacrosse',
  'Mountain Biking',
  'Polo',
  'Rugby',
  'Skateboarding',
  'Ski',
  'Soccer',
  'Softball',
  'Surf',
  'Synchronized Swimming',
  'Tennis',
  'Table Tennis',
  'Track and Field',
  'Triathlon',
  'Volleyball',
  'Weightlifting',
  'Wrestling'
];

//game variables
let selectedWord = '';
let displayWord = '';
let wrongGuesses = 0;
let guessedLetters = [];
const maxMistakes = 6;
let winAmount = 0;
let lossAmount = 0;

//start game
function startGame() {
  //reset game variables
  wrongGuesses = 0;
  guessedLetters = [];
  //pick a random word
  selectedWord = getRandomWord();
  //create starting underscores
  displayWord = '_' .repeat(selectedWord.length);
  //update screen
  updateScreen();
}













































//AI keyboard clicked
function keyPress(letter) {
  console.log("You pressed " + letter);

  // disable the button so it can't be clicked again
  const buttons = document.querySelectorAll(".keyboard button");
  buttons.forEach(btn => {
    if (btn.innerText === letter) {
      btn.disabled = true;
    }
  });

  // here you can call your hangman guess function
  // guessLetter(letter);
}
//END OF AI KEYBOARD


//AI screen 
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');  // hide all screens
  });
  document.getElementById(screenId).classList.add('active'); // show selected
}

// Example: go to easy screen
// showScreen('easy');
//END OF AI SCREEN





