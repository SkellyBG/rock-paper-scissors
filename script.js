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
  
  if (result === "Win") {
      return "You Win! " + playerSelection + " beats " + computerSelection; 
  } else if (result === "Draw") {
      return "You Draw! " + playerSelection + " ties " + computerSelection;
  } else if (result === "Lose") {
      return "You Lose! " + playerSelection + " loses to " + computerSelection;
  }
  return;
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game(input) {
  const resultDiv = document.querySelector("#result");
  const resultP = document.createElement("p");
  resultP.textContent = playRound(input, getComputerChoice());
  if (resultDiv.firstChild) {
    resultDiv.removeChild(resultDiv.firstChild);
  }
  resultDiv.appendChild(resultP);
}

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener('click', function(e) {game("Rock")});
const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener('click', function(e) {game("Paper")});
const scissorBtn = document.querySelector("#scissor");
scissorBtn.addEventListener('click', function(e) {game("Scissor")});
