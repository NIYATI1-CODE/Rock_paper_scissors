let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  const num = Math.random();
  if (num < 0.33) {
    return "rock";
  }
  else if (num < 0.66) {
    return "paper";
  }
  else {
    return "scissors";
  }
}
function getHumanChoice() {
  let ch = prompt('Rock Paper Scissors ??...Your choice Sir/Madam?');
  if (ch) {
    return ch;
  }
  else {
    alert("Try again , I guess!");
  }
}
