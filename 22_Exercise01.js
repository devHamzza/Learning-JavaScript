// ----------- Exercise No.1 ----------- //

// ----------- Number Guessing Game ----------- //

const GetRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
}

let number = GetRandomNumber(100)
let chances = 0;
let guess;

console.log("This is a Number Guessing game, You have to enter a number if it matches with computer's auto generated number then you win.\n");

let YourName = prompt("First of All Enter Your Name");

guess = prompt("Hello " + YourName + "! In order to Guess the Computer Generated Number, Enter a Number between 1 to 100 \n");


do {
    guess = parseInt(guess)

    if (guess > number) {
        console.log("Your Entry was greater then auto Generated Number");

        guess = prompt("Enter the Number Again!")
        guess = parseInt(guess)
        ++chances;
        continue;
    }

    else if (guess < number) {
        console.log("Your Entry was Lesser then auto Generated Number");
        guess = prompt("Enter the Number Again!")
        guess = parseInt(guess)
        ++chances;us
        continue;
    }
} while (guess != number)

let score = 100 - chances;

console.log("\n Congratulations " + YourName + "! The auto generated number was " + number + " and you guessed it right after " + chances + " Attempts. \n Your final score is: " + score);
