let humanScore = 0;
let computerScore = 0;

const gameWinner = document.querySelector(".game-winner");
const button = document.querySelector("section");
const gameResult = document.querySelector(".game-result");

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3) + 1;

  switch (randomInt) {
    case 1:
      return "rock";

    case 2:
      return "paper";

    case 3:
      return "scissors";

    default:
      return "none";
  }
}

button.addEventListener("click", function (e) {
  const classString = e.target.className;

  playerSection(classString);

  if (humanScore >= 5) {
    gameWinner.innerText = "Congratulation, You win!";
  } else if (computerScore >= 5) {
    gameWinner.innerText = "Sorry, Computer Wins!";
  }
});

function playerSection(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      gameResult.innerText = "Its a draw! Rock and Rock";
    } else if (computerChoice === "paper") {
      gameResult.innerText = "You lose! Paper beats Rock ";
      computerScore += 1;
    } else if (computerChoice === "scissors") {
      gameResult.innerText = "You win! Rock Beat Scissors";
      humanScore += 1;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      gameResult.innerText = "You win! Paper beats Rock";
      humanScore += 1;
    } else if (computerChoice === "paper") {
      gameResult.innerText = "Its a draw! Paper and Paper ";
    } else if (computerChoice === "scissors") {
      gameResult.innerText = "You lose! Scissors beat Paper";
      computerScore += 1;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      gameResult.innerText = "You lose! Rock beats Scissors";
      computerScore += 1;
    } else if (computerChoice === "paper") {
      gameResult.innerText = "You win! Scissors beats Paper ";
      humanScore += 1;
    } else if (computerChoice === "scissors") {
      gameResult.innerText = "Its a draw! Scissors and Scissors";
    }
  }
}
