let prompt = require("prompt-sync")();

let guess = Number(prompt("Guess a number: "));
let secretNumber = Number(Math.floor(Math.random() * 100) + 1);
let counter = 1; //attempts counter
let guessed = []; //array of guessed numbers

while (guess !== secretNumber) {
  if (isNaN(guess)) {
    console.log("Not a number! Try again!")
    counter --;
  } else if (guessed.includes(guess)) {
    console.log('Already Guessed');
    counter--;
  } else if (guess < secretNumber) {
    console.log('Too low!');
  } else if (guess > secretNumber) {
    console.log('Too high!');
  } else if (guess === secretNumber) {
    break;
  }

  guessed.push(guess); //push guessed number to guessed array

  counter++; //increase counter

  guess = Number(prompt("Guess a number: "));
}

console.log("you got it! You took " + counter + " attempts");