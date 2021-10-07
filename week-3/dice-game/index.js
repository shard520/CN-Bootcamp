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

// DICE ROLL
const rollDice = () => {
  const num = Math.floor(Math.random() * 6 + 1);
  updateDiceImg(num);

  if (num === 1) return switchPlayer();

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
  } else {
    player2TotalScore += player2RoundScore;
    player2TotalScoreEl.textContent = player2TotalScore;
  }

  resetRoundScore(currentPlayer);
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

  currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1';

  if (currentPlayer === 'player1') {
    player2Container.classList.remove('player__container--active');
    player1Container.classList.add('player__container--active');
  } else {
    player1Container.classList.remove('player__container--active');
    player2Container.classList.add('player__container--active');
  }
};

// EVENT LISTENERS
rollBtn.addEventListener('click', () => rollDice());

holdBtn.addEventListener('click', () => updateTotalScore(currentPlayer));
