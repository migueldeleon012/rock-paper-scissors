const moveSet = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const computerPlay = () => moveSet[Math.floor(Math.random() * moveSet.length)];

const playerPlay = () => {
  let playerMove = prompt(
    'type: rock, paper, scissors. Wrong spelling will chose rock'
  ).toLowerCase();
  //checks if there is a valid move
  const playerMoveCheck = moveSet.some((move) => move === playerMove);
  return playerMoveCheck ? playerMove : 'rock';
};

const play = (playerSelection, computerSelection) => {
  // //get the first letter of both computer and player
  let combinationMove = playerSelection[0] + computerSelection[0];
  //all possibilities
  switch (combinationMove) {
    case 'rs':
    case 'pr':
    case 'sp':
      playerScore++;
      return `you win!\n your choice: ${playerSelection} \n computer's choice: ${computerSelection} \n your score: ${playerScore} \n computer score: ${computerScore}`;
    case 'sr':
    case 'rp':
    case 'ps':
      computerScore++;
      return `you lose! \n your choice: ${playerSelection} \n computer's choice: ${computerSelection} \n your score: ${playerScore} \n computer score: ${computerScore}`;
    default:
      return `draw \n your choice: ${playerSelection} \n computer's choice: ${computerSelection} \n your score: ${playerScore} \n computer score: ${computerScore}`;
  }
};

const getGame = () => {
  let playerSelection;
  let computerSelection;
  for (let i = 0; i < 5; i++) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    console.log(play(playerSelection, computerSelection));
  }
};

getGame();
