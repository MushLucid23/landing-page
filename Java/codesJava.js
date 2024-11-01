//function add7(number){
//    number = number + 7;
//    console.log(number);
//}
//add7(10);

//function multiply(num1, num2){
//    product = num1 * num2;
//    console.log(product);
//}
//multiply(2,34.5);

//function capitalize(string) {
//    return string[0].toUpperCase() + string.slice(1).toLowerCase();
//}
//console.log(capitalize('shiT thIs waS Hard!'));
//Write a function called capitalize that takes a string and returns that string with only 
//the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.-->

//function lastLetter(string){
//    return string.slice(-1);
//}
//console.log(lastLetter('Taco'));

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
for (let i =1; i <= answer; i++) {
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
    console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
-----------------------------------------------------------------------

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}
    

function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
        while (!["rock", "paper", "scissors"].includes(choice)) {
            choice = prompt("Invalid choice. Please choose Rock, Paper, or Scissors:").toLowerCase();
        }
        return choice;
}    

let humanChoice = getHumanChoice();
console.log("You chose:", humanChoice);



function playRound() {
    computerSelection = getComputerChoice();
    playerSelection = getHumanChoice();

    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        humanScore += 1;
        return "You win! Rock beats Scissors!";
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        humanScore += 1;
        return "You win! Scissors beats Paper!";
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        humanScore += 1;
        return "You win! Paper beats Rock!";
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore += 1;
        return "You lose! Scissors beats Paper!";
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore += 1;
        return "You lose Scissors beats Paper!";
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore += 1;
        return "You lose! Paper beats Rock!";
    } else {
        humanScore === computerScore;
        return "Tie!";
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        console.log('Your score: ${humanScore}')
        console.log('Computer score: ${computerScore}')
    }
}
    let humanScore = 0;
    let computerScore = 0;
winner();

function winner() {
    if (computerScore > humanScore) {
        console.log("\nThe computer dominated your skinny ass! Better luck next time!")
    } else if (computerScore < humanScore) {
        console.log("\nWay to Kick Ass! You win!")
    } else {
        console.log("\nHoly Shit, now way! It's a tie")
    }
}
playGame();

    


 
    

    

