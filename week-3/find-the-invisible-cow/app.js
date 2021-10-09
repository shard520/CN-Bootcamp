const beginBtn = document.querySelector('#begin');
const rootEl = document.querySelector('.root');
const container = document.querySelector('.container');

const viewportHeight = window.innerHeight;
const viewportWidth = window.innerWidth;

let cowX, cowY, cowImg;
let mouseCoords = [];

const startGame = () => {
  beginBtn.remove();
  container.classList.remove('start-game');

  cowImg = document.createElement('img');
  cowImg.src = './cow.svg';

  cowImg.classList.add('cow');

  // TODO - add transform: translate() if random number is within 30px of boundary to avoid cow being placed off screen
  cowY = randomNum(viewportHeight);
  cowX = randomNum(viewportWidth);

  cowImg.style.top = `${cowY}px`;
  cowImg.style.left = `${cowX}px`;

  container.appendChild(cowImg);

  window.addEventListener('mousemove', detectMousePosition);

  // TODO - add gameOver function
  cowImg.addEventListener('click', gameOver);
};

const randomNum = max => Math.floor(Math.random() * max);

const detectMousePosition = e => {
  // Get mouse coordinates relative to the cowImg element
  const rect = cowImg.getBoundingClientRect();
  const posX = e.clientX - rect.left;
  const posY = e.clientY - rect.top;

  mouseCoords = [posX, posY];

  checkPosition();
};

const checkPosition = () => {
  const [mouseX, mouseY] = mouseCoords;

  // Calculate mouse position relative to the cowImg element as a percentage of the viewport dimensions
  const x = (mouseX / viewportWidth) * 100;
  const y = (mouseY / viewportHeight) * 100;

  if (checkPercentage(x, y, 2.5)) {
    console.log('2.5%');
  } else if (checkPercentage(x, y, 5)) {
    console.log('5%');
  } else if (checkPercentage(x, y, 10)) {
    console.log('10%');
  } else if (checkPercentage(x, y, 20)) {
    console.log('20%');
  } else if (checkPercentage(x, y, 30)) {
    console.log('30%');
  } else if (checkPercentage(x, y, 40)) {
    console.log('40%');
  } else if (checkPercentage(x, y, 50)) {
    console.log('50%');
  } else if (checkPercentage(x, y, 60)) {
    console.log('60%');
  } else if (checkPercentage(x, y, 70)) {
    console.log('70%');
  } else if (checkPercentage(x, y, 80)) {
    console.log('80%');
  } else if (checkPercentage(x, y, 90)) {
    console.log('90%');
  } else if (checkPercentage(x, y, 100)) {
    console.log('100%');
  }
};

const checkPercentage = (x, y, num) => {
  // Check if x and y coordinates are both within a given percentage range
  return x <= num && x >= -num && y <= num && y >= -num;
};

beginBtn.addEventListener('click', startGame);
