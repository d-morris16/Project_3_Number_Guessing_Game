//A user has three tries to guess the number, between 1-100, that the computer picked.
//Whenever they guess, let them know if their guess is too high, or too low.
//After their third guess, reveal the number the computer chose to them, and let them know if they got it right or wrong.
//Add a "Submit" button to the form, and use the "onsubmit" attribute to call your JavaScript function.



/*
Step 0: Create a variable that will hold the return value of the rndNum function. 
Step 1: Create a function (rndNum) that will return a random number from 1-100.
Step 2: Console.log the rndNum. 
Step 4: Create an if/else if statement that will check if the user's guess matches the rndNum function.
Step 5: Define a function that will change the state of the game (number of guesses) with each submit event. 
Step 6: Create a conditional statement for when the user guesses the correct number. 

*/


let rndNum = getRndNumber(1,101);
let numOfClicks = 0;

function getRndNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let manyEvents = document.getElementById("submit");

manyEvents.addEventListener("submit", function(event) {
		event.preventDefault()
	});
manyEvents.addEventListener("submit",guessComparison);
manyEvents.addEventListener("submit",numOfGuesses);

function guessComparison() {
	let x = document.getElementById("numericInput").value;
	console.log(rndNum);
	if (x == rndNum) {
		document.getElementById("feedback").innerHTML = "You guessed the correct number: " + rndNum;
		numOfGuesses(10 > 9);
	} else if (x > rndNum) {
		document.getElementById("feedback").innerHTML = "Your guess is too high";
	} else if (x < rndNum) {
		document.getElementById("feedback").innerHTML = "Your guess is too low";
	}
}


function numOfGuesses (num1, num2) {
  let state = numOfClicks;
  
  if (num1 > num2) {
  document.getElementById("gameStatus").innerHTML ="You win! Press New Game";
  }else if (state === 0) {
  document.getElementById("gameStatus").innerHTML = "2 more guesses";
  numOfClicks = 1;
  } else if (state == 1) {
  document.getElementById("gameStatus").innerHTML = "1 more guess";
  numOfClicks = 2;
  } else if (state == 2) {
  document.getElementById("gameStatus").innerHTML = "Game Over! The number was: " + rndNum + "   Press New Game to start over";
  numOfClicks = 0;
}
}

function newGame() {
	document.getElementById("gameStatus").innerHTML = "";
	document.getElementById("feedback").innerHTML = "";
	document.getElementById("submit").reset();
	rndNum = getRndNumber(1, 101);
	numOfClicks = 0;
}