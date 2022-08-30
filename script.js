const moveSet = ['rock', 'paper', 'scissors'];
const computerPlay = () => moveSet[Math.floor(Math.random() * moveSet.length)];

const playerPlay = () => {
  let playerMove = prompt('type: rock, paper, scissors').toLowerCase();
  //checks if there is a valid move
  const playerMoveCheck = moveSet.some((move) => move === playerMove);
  // playerMoveCheck ? playerMove : playerPlay('please check your spelling');
  if (playerMoveCheck) {
    return playerMove;
  }
  return 'rock';
};

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const play = (playerSelection, computerSelection) => {
  // //get the first letter of both computer and player
  let combinationMove = playerSelection[0] + computerSelection[0];
  //all possibilities
  switch (combinationMove) {
    case 'rs':
    case 'pr':
    case 'sp':
      playerScore++;
      return `you win!\n your score: ${playerScore} \n computer score: ${computerScore}`;
    case 'sr':
    case 'rp':
    case 'ps':
      computerScore++;
      return `you lose! \n your score: ${playerScore} \n computer score: ${computerScore}`;
    default:
      return `draw \n your score: ${playerScore} \n computer score: ${computerScore}`;
  }
};

const getGame = () => {
  for (let i = 0; i < 5; i++) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    console.log(play(playerSelection, computerSelection));
  }
};

getGame();
