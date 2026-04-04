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
let maxMistakes = 6;
let winAmount = 0;
let lossAmount = 0;
let gameOver = false;

//pic random word for level
function getRandomWord(level) {
  let filteredWords = wordList.filter(word => {
    if (level === 'easy') return word.length <= 6
    if (level === 'medium') return word.length >= 7 && word.length <= 12
    if (level === 'hard') return word.length >= 13
  })
  return filteredWords[Math.floor(Math.random() * filteredWords.length)]
}

//start game
function startGame(level) {
  //ai so i can have the card around the game bigger for hard level
  const gameCard = document.querySelector('.game-card');

  // remove old size classes
  gameCard.classList.remove('easy', 'medium', 'hard');

  // add the current level
  gameCard.classList.add(level);
  //end ai

  selectedWord = getRandomWord(level).toUpperCase()

  //ai
  // own code (displayWord = '_'.repeat(selectedWord.length))
  displayWord = selectedWord.split('').map(char => (char === ' ' ? ' ' : '_')).join('');
  document.getElementById('wordDisplay').textContent =
    displayWord.replace(/ /g, '    '); // 4 spaces for word gaps
  // finds every space in the word and replaces it with 4 spaces so gaps between words are bigger than gaps between letters
  //edn ai
  wrongGuesses = 0;
  guessedLetters = [];
  gameOver = false;

  document.getElementById('wordDisplay').textContent = displayWord.split('').join('  ')
  document.getElementById('screen-home').classList.remove('active')
  document.getElementById('game-screen').classList.add('active')
}

//end game
function endGame(win) {
  gameOver = true;

  if (win) {
    //ai so i can do popup not alert but i know how to do alerts
    //alert('You win!');
    document.getElementById("popup-text").textContent = "You win!";
    document.getElementById("popup").style.display = "block";
    setTimeout(() => {
      document.getElementById("popup").style.display = "none";
    }, 2000);
  } else {
    //alert('Game Over! The word was ' + selectedWord)
    document.getElementById("popup-text").textContent = "Game Over! The word was " + selectedWord;
    document.getElementById("popup").style.display = "block";
    setTimeout(() => {
      document.getElementById("popup").style.display = "none";
    }, 2000);
  }
}



//reset variables
function reset() {
  selectedWord = '';
  displayWord = '';
  wrongGuesses = 0;
  guessedLetters = [];
  gameOver = false;

  document.getElementById('wordDisplay').textContent = '';
  document.getElementById('medal').src = 'imgs/medal6.png';

  const buttons = document.querySelectorAll(".keyboard-row button");
  buttons.forEach(btn => btn.disabled = false);

  document.getElementById('game-screen').classList.remove('active');
  document.getElementById('screen-home').classList.add('active');
}



//AI keyboard clicked
function keyPress(letter) {

  if (gameOver) return;

  letter = letter.toUpperCase();
  console.log("You pressed " + letter);

  //prevent duplicate guesses
  if (guessedLetters.includes(letter)) return;
  guessedLetters.push(letter);

  //disable the button
  const buttons = document.querySelectorAll(".keyboard-row button")
  buttons.forEach(btn => {
    if (btn.innerText === letter) {
      btn.disabled = true
    }
  })

  //check if letter is in the word
  if (selectedWord.includes(letter)) {

    let newWord = ''

    for (let i = 0; i < selectedWord.length; i++) {

      if (selectedWord.charAt(i) === letter) {
        newWord += letter
      } else {
        newWord += displayWord[i]
      }

    }

    displayWord = newWord

    //update screen
    // document.getElementById('wordDisplay').textContent = displayWord.split('').join('  ')
    //ai "" (space) becomes \n (new line)
    document.getElementById('wordDisplay').textContent = displayWord;
    //end ai
    //win check
    if (displayWord.indexOf('_') === -1) {
      endGame(true);
    }

  } else {
    // WRONG GUESS!
    wrongGuesses++;

    // Update medal image
    const medalImg = document.getElementById('medal');
    medalImg.src = `imgs/medal${maxMistakes - wrongGuesses}.png`;

    // Check if game over
    if (wrongGuesses >= maxMistakes) {
      endGame(false);
    }
  }
}
//END OF AI MEDAL

//ai to guess whole word

//guess whole word
//ai to guess whole word
function guessWord() {
  if (gameOver) return;

  const input = document.getElementById("guess-input-hidden");

  // Show input if it's hidden
  if (input.style.display === "none") {
    input.style.display = "inline-block";
    input.focus(); // put cursor in it
    return; // wait for user to type and press Enter
  }

  // get guess from hidden input
  let guess = input.value.toUpperCase();
  input.value = ""; // clear input
  input.style.display = "none"; // hide input again

  //check if correct
  if (guess === selectedWord) {
    displayWord = selectedWord;
    document.getElementById('wordDisplay').textContent =
      displayWord.split('').join('  ');

    document.getElementById("popup-text").textContent = "You win!";
    document.getElementById("popup").style.display = "block";
    setTimeout(() => {
      document.getElementById("popup").style.display = "none";
    }, 2000);

    endGame(true);
  }
  //wrong guess
  else {
    wrongGuesses++;

    const medalImg = document.getElementById('medal');
    medalImg.src = `imgs/medal${maxMistakes - wrongGuesses}.png`;

    if (wrongGuesses >= maxMistakes) {
      document.getElementById("popup-text").textContent =
        "Game Over! The word was " + selectedWord;

      document.getElementById("popup").style.display = "block";
      setTimeout(() => {
        document.getElementById("popup").style.display = "none";
      }, 2000);

      endGame(false);
    } else {
      document.getElementById("popup-text").textContent = "Wrong guess!";
      document.getElementById("popup").style.display = "block";
      setTimeout(() => {
        document.getElementById("popup").style.display = "none";
      }, 2000);
    }
  }
}