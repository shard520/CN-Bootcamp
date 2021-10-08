const beginBtn = document.querySelector('#begin');
const rootEl = document.querySelector('.root');
const container = document.querySelector('.container');

const viewportHeight = window.innerHeight;
const viewportWidth = window.innerWidth;

const startGame = () => {
  beginBtn.remove();
  container.classList.remove('start-game');

  const cowImg = document.createElement('img');
  cowImg.src = './cow.svg';

  cowImg.classList.add('cow');

  // TODO - add transform: translate() if random number is within 30px of boundary to avoid cow being placed off screen
  cowImg.style.top = `${randomNum(viewportHeight)}px`;
  cowImg.style.left = `${randomNum(viewportWidth)}px`;

  container.appendChild(cowImg);
};

beginBtn.addEventListener('click', startGame);

const randomNum = max => Math.floor(Math.random() * max);
