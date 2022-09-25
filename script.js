function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  let result = "";
  //         Rock  Paper  Scissor | Player
  //    Rock 
  //   Paper 
  // Scissor
  // -------
  // Computer
  const table = [
      ["Draw", "Win", "Lose"],
      ["Lose", "Draw", "Win"],
      ["Win", "Lose", "Draw"],
  ]
  const choices = ["Rock", "Paper", "Scissor"];
  result = table[choices.indexOf(playerSelection)][choices.indexOf(computerSelection)];
  return result;
}

function formatResult(result, playerSelection, computerSelection) {
  if (result === "Win") {
    return "You Win! " + playerSelection + " beats " + computerSelection; 
  } else if (result === "Draw") {
    return "You Draw! " + playerSelection + " ties " + computerSelection;
  } else {
    return "You Lose! " + playerSelection + " loses to " + computerSelection;
  }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game(input) {
  const resultDiv = document.querySelector("#result");
  const resultP = document.createElement("p");
  const computerChoice = getComputerChoice();
  const result = playRound(input, computerChoice);
  resultP.textContent = formatResult(result, input, computerChoice);
  if (resultDiv.firstChild) {
    resultDiv.removeChild(resultDiv.firstChild);
  }
  resultDiv.appendChild(resultP);

  const scoreDiv = document.querySelector("#score");
  if (result === "Win") {
    playerScore++;
  } else if (result === "Lose") {
    computerScore++;
  }
  const scoreP = document.createElement("p");
  scoreP.textContent = "YOU " + playerScore + ":" + computerScore + " COMPUTER";
  if (scoreDiv.firstChild) {
    scoreDiv.removeChild(scoreDiv.firstChild);
  }
  scoreDiv.appendChild(scoreP);

  if (playerScore === 5 || computerScore === 5) {
    const finalResultDiv = document.querySelector("#final-result");
    const finalResultP = document.createElement("p");
    if (playerScore === 5) {
      finalResultP.textContent = "YOU WIN!";
    } else {
      finalResultP.textContent = "COMPUTER WIN!";
    }
    finalResultDiv.appendChild(finalResultP);
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
  }
}

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener('click', function(e) {game("Rock")});
const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener('click', function(e) {game("Paper")});
const scissorBtn = document.querySelector("#scissor");
scissorBtn.addEventListener('click', function(e) {game("Scissor")});

let playerScore = 0;
let computerScore = 0;
