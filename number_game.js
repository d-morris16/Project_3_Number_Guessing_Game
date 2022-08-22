//A user has three tries to guess the number, between 1-100, that the computer picked.
//Whenever they guess, let them know if their guess is too high, or too low.
//After their third guess, reveal the number the computer chose to them, and let them know if they got it right or wrong.
//Add a "Submit" button to the form, and use the "onsubmit" attribute to call your JavaScript function.



/*
Step 0: Create a variable that will hold the return value of the rndNum function. 
Step 1: Create a function (rndNum) that will return a random number from 1-100.
Step 2: DOM manipulate an HTML element to display the return value of the function (rndNum). 
Step 4: Create an if else statement that will check if the user's  guess matches the rndNum function.
Step 5: Create a variable that will hold the value of times the user has clicked the submit button.
Step 6: Create a function that will loop for 3 iterations indicating the current gamestate to the user.

*/


let rndNum = getRndNumber(1,101);
let numOfClicks = 0;

function getRndNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.getElementById("submit").addEventListener("submit", function(event){
		event.preventDefault()
	});

function guessComparison() {
	console.log(rndNum);
	let x = document.getElementById("numericInput").value;
	if (x == rndNum) {
		return document.getElementById("feedback").innerHTML = "You guessed the correct number: " + rndNum;
	} else if (x > rndNum) {
		return document.getElementById("feedback").innerHTML = "Your guess is too high";
	} else if (x < rndNum) {
		return document.getElementById("feedback").innerHTML = "Your guess is too low";
	}
}


function numOfGuesses () {
  let gameState = "";
  let state = numOfClicks;
  
  if (state === 0) {
  gameState = "2 more guesses";
  document.getElementById("gameStatus").innerHTML = gameState;
  return numOfClicks = 1;
  } else if (state == 1) {
  gameState = "1 more guess";
  document.getElementById("gameStatus").innerHTML = gameState;
  return numOfClicks = 2;
  } else if (state == 2) {
  gameState = "Game Over! The number was: " + rndNum;
  document.getElementById("gameStatus").innerHTML = gameState;
}
}