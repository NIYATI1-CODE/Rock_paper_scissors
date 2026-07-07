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
function playRound(Human, Comp) {
  Human = Human.toLowerCase();
  if (Human == "rock" && Comp == "paper") {
    console.log("You LOSE! Paper beats Rock");
    computerScore++;
  }
  else if (Human == "paper" && Comp == "rock") {
    console.log("You WIN! Paper beats Rock")
    humanScore++;
  }
  else if (Human == "scissors" && Comp == "paper") {
    console.log("You WIN! Scissors beats Paper");
    humanScore++;
  }
  else if (Human == "rock" && Comp == "scissors") {
    console.log("You WIN! Rock beats Scissors");
    humanScore++;
  }
  else if (Human == "paper" && Comp == "scissors") {
    console.log("You LOSE! Scissors beats Paper");
    computerScore++;
  }
  else if (Human === Comp) {
    console.log("TIE...It seems like we both won.");
  }
  else {
    console.log("You LOSE! Scissors beats Rock");
    computerScore++;
  }
}
