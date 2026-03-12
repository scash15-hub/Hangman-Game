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

//pic random word for level
function getRandomWord (level) {
let filteredWords = wordList.filter(word => {
  if (level === 'easy') return word.length <= 6
  if (level === 'medium') return word.length >= 7 && word.length <= 12
  if (level === 'hard') return word.length >= 13
})
return filteredWords[Math.floor(Math.random() * filteredWords.length)]
}

//start game
function startGame(level) {
selectedWord = getRandomWord(level)
displayWord = '_'.repeat(selectedWord.length)
document.getElementById('wordDisplay').textContent = displayWord.split('').join('  ')
}

onclick="showScreen('screen-easy')"




//AI keyboard clicked
function keyPress(letter) {
  console.log("You pressed " + letter);
  //AI keyboard clicked
function keyPress(letter) {
  console.log("You pressed " + letter);

  //disable the button
const buttons = document.querySelectorAll(".keyboard-row button")
buttons.forEach(btn => {
  if (btn.innerText === letter.toUpperCase()) {
    btn.disabled = true
  }
})

//check if letter is in the word
if (selectedWord.includes(letter)) {

let newWord = ''

for (let i = 0; i < selectedWord.length; i++) {

  if (selectedWord[i] === letter) {
    newWord += letter
  } else {
    newWord += displayWord[i]
  }

}

displayWord = newWord

//update screen
document.getElementById('wordDisplay').textContent =
displayWord.split('').join('  ')

}

}
//END OF AI KEYBOARD

  //disable the button
const buttons = document.querySelectorAll(".keyboard-row button")
buttons.forEach(btn => {
  if (btn.innerText === letter.toUpperCase()) {
    btn.disabled = true
  }
})

//check if letter is in the word
if (selectedWord.includes(letter)) {

let newWord = ''

for (let i = 0; i < selectedWord.length; i++) {

  if (selectedWord[i] === letter) {
    newWord += letter
  } else {
    newWord += displayWord[i]
  }

}

displayWord = newWord

//update screen
document.getElementById('wordDisplay').textContent =
displayWord.split('').join('  ')

}

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





