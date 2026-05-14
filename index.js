let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let userChoice = prompt("rock, paper, scisssors");
  return userChoice.toLowerCase();
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      console.log("Its a draw! Rock and Rock");
    } else if (computerChoice === "paper") {
      console.log("You lose! Paper beats Rock ");
      computerScore += 1;
    } else if (computerChoice === "scissors") {
      console.log("You win! Rock Beat Scissors");
      humanScore += 1;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      humanScore += 1;
    } else if (computerChoice === "paper") {
      console.log("Its a draw! Paper and Paper ");
    } else if (computerChoice === "scissors") {
      console.log("You lose! Scissors beat Paper");
      computerScore += 1;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors");
      computerScore += 1;
    } else if (computerChoice === "paper") {
      console.log("You win! Scissors beats Paper ");
      humanScore += 1;
    } else if (computerChoice === "scissors") {
      console.log("Its a draw! Scissors and Scissors");
    }
  }
}

function playGame(num_games) {
  for (let i = 0; i < num_games; i++) {
    console.log(`Game ${i + 1}`);
    playRound();
  }
  console.log("Game Over, Total Score");
  console.log("-----------------------");
  console.log(`Your Score ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);

  if (humanScore === computerScore) {
    console.log("Its a draw!");
  } else if (humanScore > computerScore) {
    console.log("Congratulation, You win!");
  } else if (humanScore < computerScore) {
    console.log("Sorry, Computer Wins!");
  }
}

playGame(5);
