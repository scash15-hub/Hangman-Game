//AI keyboard clicked
function keyPress(letter){
  console.log("You pressed " + letter);

  // disable the button so it can't be clicked again
  const buttons = document.querySelectorAll(".keyboard button");
  buttons.forEach(btn => {
    if(btn.innerText === letter){
      btn.disabled = true;
    }
  });

  // here you can call your hangman guess function
  // guessLetter(letter);
}
//END OF AI KEYBOARD





