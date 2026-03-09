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





