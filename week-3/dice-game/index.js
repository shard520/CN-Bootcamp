// HTML ELEMENTS
const dice = document.querySelector('.control__dice');
const rollBtn = document.querySelector('.control__roll');
const holdBtn = document.querySelector('.control__hold');

const player1RoundScoreEl = document.querySelector('#player1RoundScoreEl');
const player1TotalScoreEl = document.querySelector('#player1TotalScoreEl');
const player2RoundScoreEl = document.querySelector('#player2RoundScoreEl');
const player2TotalScoreEl = document.querySelector('#player2TotalScoreEl');

const player1Container = document.querySelector('#player1');
const player2Container = document.querySelector('#player2');

// GAME VARIABLES
let player1RoundScore = 0;
let player1TotalScore = 0;
let player2RoundScore = 0;
let player2TotalScore = 0;
let currentPlayer = 'player1';
let maxScore = 0;

// DICE ROLL
const rollDice = () => {
  const num = Math.floor(Math.random() * 6 + 1);
  updateDiceImg(num);
  dice.classList.remove('u-hidden');

  if (num === 1) {
    updateStatus('Rolled a 1: Bust');
    return switchPlayer();
  } else {
    getStatus().classList.add('u-hidden');
  }

  updateRoundScore(num, currentPlayer);
};

const updateDiceImg = num => {
  dice.src = `img/dice-${num}.png`;
};

// UPDATE SCORES
const updateRoundScore = (num, currentPlayer) => {
  if (currentPlayer === 'player1') {
    player1RoundScore += num;
    player1RoundScoreEl.textContent = player1RoundScore;
  } else {
    player2RoundScore += num;
    player2RoundScoreEl.textContent = player2RoundScore;
  }
};

const updateTotalScore = currentPlayer => {
  if (currentPlayer === 'player1') {
    player1TotalScore += player1RoundScore;
    player1TotalScoreEl.textContent = player1TotalScore;
    updateMaxScore(player1TotalScore);
  } else {
    player2TotalScore += player2RoundScore;
    player2TotalScoreEl.textContent = player2TotalScore;
    updateMaxScore(player2TotalScore);
  }

  resetRoundScore(currentPlayer);
  if (!checkWinner()) switchPlayer();
};

const updateMaxScore = num => {
  if (num > maxScore) {
    maxScore = num;
  }

  checkWinner();
};

// RESET SCORES
const resetRoundScore = currentPlayer => {
  if (currentPlayer === 'player1') {
    player1RoundScore = 0;
  } else {
    player2RoundScore = 0;
  }

  updateRoundScore(0, currentPlayer);
};

// CHANGE PLAYER
const switchPlayer = () => {
  resetRoundScore(currentPlayer);

  setTimeout(() => {
    dice.classList.add('u-hidden');
  }, 750);

  currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1';

  if (currentPlayer === 'player1') {
    player2Container.classList.remove('player__container--active');
    player1Container.classList.add('player__container--active');
  } else {
    player1Container.classList.remove('player__container--active');
    player2Container.classList.add('player__container--active');
  }

  getStatus().classList.add('u-hidden');
};

// UPDATE STATUS
const updateStatus = msg => {
  const status = getStatus();
  status.textContent = msg;
  status.classList.remove('u-hidden');
};

// GET CURRENT PLAYER STATUS
const getStatus = () => {
  return document.querySelector(`#${currentPlayer} > .player__status`);
};

// WINNING GAME
const checkWinner = () => {
  if (maxScore >= 20) {
    gameOver();
    return true;
  } else return false;
};

const gameOver = () => {
  const winner = document.querySelector(`#${currentPlayer}`);
  const status = getStatus();
  status.classList.remove('u-hidden');

  updateStatus('Winner');
  winner.classList.add('player__container--winner');

  rollBtn.textContent = 'New Game';
  rollBtn.removeEventListener('click', rollDice);
  rollBtn.addEventListener('click', init);
};

// EVENT LISTENERS
holdBtn.addEventListener('click', () => updateTotalScore(currentPlayer));

// INITIALISE GAME
const init = () => {
  player1RoundScore = 0;
  player1TotalScore = 0;
  player2RoundScore = 0;
  player2TotalScore = 0;
  currentPlayer = 'player1';
  maxScore = 0;

  player1Container.classList.remove('player__container--winner');
  player2Container.classList.remove('player__container--winner');

  player1Container.querySelector('.player__status').classList.add('u-hidden');
  player2Container.querySelector('.player__status').classList.add('u-hidden');

  updateTotalScore('player1');
  updateTotalScore('player2');

  rollBtn.removeEventListener('click', init);
  rollBtn.addEventListener('click', rollDice);
  rollBtn.textContent = 'Roll';

  dice.classList.add('u-hidden');
};

init();
