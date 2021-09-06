let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  return randomNumber
};

console.log(generateTarget());

const compareGuesses = (human, computer, secretTargetNo) => {
  const humanDiff = Math.abs(secretTargetNo - human);
  const computerDiff = Math.abs(secretTargetNo - computer);
  if (human === computer) {
    return true;
  } else if (humanDiff > computerDiff) {
    return false;
  } else {
    return true;
  }
};

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber = currentRoundNumber + 1;
};

