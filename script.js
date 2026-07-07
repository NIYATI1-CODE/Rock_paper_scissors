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
}
playGame();
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let comp_ch = getComputerChoice();
    let human_ch = getHumanChoice();
    playRound(human_ch, comp_ch);
  }
  function playRound(Human, Comp) {
    Human = Human.toLowerCase();
    if (Human === "rock" && Comp === "paper") {
      console.log("You LOSE! Paper beats Rock");
      computerScore++;
    }
    else if (Human === "paper" && Comp === "rock") {
      console.log("You WIN! Paper beats Rock")
      humanScore++;
    }
    else if (Human === "scissors" && Comp === "paper") {
      console.log("You WIN! Scissors beats Paper");
      humanScore++;
    }
    else if (Human === "rock" && Comp === "scissors") {
      console.log("You WIN! Rock beats Scissors");
      humanScore++;
    }
    else if (Human === "paper" && Comp === "scissors") {
      console.log("You LOSE! Scissors beats Paper");
      computerScore++;
    }
    else if (Human === Comp) {
      console.log("Tie! Nobody wins this round.");
    }
    else {
      console.log("You LOSE! Rock beats Scissors");
      computerScore++;
    }
  }
  if (humanScore > computerScore) {
    console.log(
        "Your score:", humanScore,
        "\nComputer's Score:", computerScore,
        "\n YOU WON THE GAME!"
    );
}
else if (humanScore < computerScore) {
    console.log(
        "Your score:", humanScore,
        "\nComputer's Score:", computerScore,
        "\n YOU LOST THE GAME!"
    );
}
else {
    console.log(
        "Your score:", humanScore,
        "\nComputer's Score:", computerScore,
        "\n IT'S A TIE!"
    );
}
}