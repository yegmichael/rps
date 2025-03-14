console.log("Hello World");

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber <= 3) {
    return "rock";
  } else if (randomNumber >= 7) {
    return "paper";
  } else {
    return "scissors";
  }
}
// console.log(getComputerChoice());

function getHumanChoice() {
  return prompt("rock, paper or scissors: ").toLowerCase();
}
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("It's a tie");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You loose! paper beats rock");
    computerScore = computerScore + 1;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! rock beats scissors");
    humanScore = humanScore + 1;
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("It's a tie");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! paper beats rock");
    humanScore = humanScore + 1;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You loose! scissors beats paper");
    computerScore = computerScore + 1;
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("It's a tie");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You loose! rock beats scissors");
    computerScore = computerScore + 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! scissors beats paper");
    humanScore = humanScore + 1;
  } else {
    console.log("You entered a wrong choice");
  }
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

// playRound(getHumanChoice(), getComputerChoice());

function playGame() {
  for (let int = 0; int < 5; int++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(
      `Your score: ${humanScore};`,
      `Computer's score: ${computerScore}`
    );
  }
}
playGame();
