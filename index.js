let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let guessField = document.querySelector(".guessField");
let guessSubmit = document.querySelector(".guessSubmit");
let guessCount = 1;

function checkGuess() {
  let userGuess = guessField.value;
  if (guessCount == 1) {
    guesses.textContent = "Previous Guesses ";
  }

  guesses.textContent += userGuess + " ";

  if (userGuess == randomNumber) {
    lastResult.textContent = "Congratulation!! You got it right!!";
    lowOrHi.textContent = "";
    lastResult.style.backgroundColor = "green";
  } else if (guessCount == 10) {
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!!";
    lastResult.style.backgroundColor = "red";
    if (userGuess > randomNumber) {
      lowOrHi.textContent = "Your Guess was too high";
    } else {
      lowOrHi.textContent = "Your Guess was too low";
    }
  }

  guessCount++;
  guessField.textContent = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  lastResult.innerHTML =
    "<h4>Game Over<h4>" + "<h4>RELOAD THE PAGE TO RESTART</h4>";
  lowOrHi.textContent = "";
  lastResult.style.backgroundColor = "white";
  guessField.disabled = true;
  guessSubmit.disabled = true;
  guessCount = 1;
}
