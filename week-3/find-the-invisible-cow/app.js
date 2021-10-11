import AudioObj from './js/audioObj.js';
import config from './js/config.js';

const { SCHEDULER_INTERVAL, SCHEDULER_LOOKAHEAD, SECONDS_BETWEEN_SOUNDS } =
  config;

const beginBtn = document.querySelector('#begin');
const container = document.querySelector('.container');

const viewportHeight = window.innerHeight;
const viewportWidth = window.innerWidth;

let cowX, cowY, cowImg;
let mouseCoords = [];

const audio = {};

// Create audio context then call loadAudio
const createContext = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;

  audio.ctx = new AudioContext();
  audio.nextNoteTime = audio.ctx.currentTime;

  loadAudio();
};

// load all sounds and store them on the audio object
const loadAudio = async function () {
  audio.zero = new AudioObj('sounds/0.mp3');
  await audio.zero.createAudio(audio.ctx);

  audio.one = new AudioObj('sounds/1.mp3');
  await audio.one.createAudio(audio.ctx);

  audio.two = new AudioObj('sounds/2.mp3');
  await audio.two.createAudio(audio.ctx);

  audio.three = new AudioObj('sounds/3.mp3');
  await audio.three.createAudio(audio.ctx);

  audio.four = new AudioObj('sounds/4.mp3');
  await audio.four.createAudio(audio.ctx);

  audio.five = new AudioObj('sounds/5.mp3');
  await audio.five.createAudio(audio.ctx);

  audio.six = new AudioObj('sounds/6.mp3');
  await audio.six.createAudio(audio.ctx);

  audio.seven = new AudioObj('sounds/7.mp3');
  await audio.seven.createAudio(audio.ctx);

  audio.eight = new AudioObj('sounds/8.mp3');
  await audio.eight.createAudio(audio.ctx);

  audio.nine = new AudioObj('sounds/9.mp3');
  await audio.nine.createAudio(audio.ctx);

  audio.ten = new AudioObj('sounds/10.mp3');
  await audio.ten.createAudio(audio.ctx);

  audio.eleven = new AudioObj('sounds/11.mp3');
  await audio.eleven.createAudio(audio.ctx);

  audio.win = new AudioObj('sounds/win.mp3');
  await audio.win.createAudio(audio.ctx);
};

// Schedule next sound to be played: if the next note time is less than
// the current time + lookahead time then cue the sound to play at the
// next note time and update the next note time, then clear the existing timer
// and set a new interval to call the function recursively at the interval value.
const scheduleSound = sound => {
  while (audio.nextNoteTime < audio.ctx.currentTime + SCHEDULER_LOOKAHEAD) {
    sound.play(audio.nextNoteTime);

    setNextNote();
  }

  clearInterval(audio.timer);
  audio.timer = setInterval(scheduleSound, SCHEDULER_INTERVAL, sound);
};

// HELPER FUNCTIONS
const checkPercentage = (x, y, num) => {
  // Check if x and y coordinates are both within a given percentage range
  return x <= num && x >= -num && y <= num && y >= -num;
};

const randomNum = max => Math.floor(Math.random() * max);

const setNextNote = () => {
  audio.nextNoteTime += SECONDS_BETWEEN_SOUNDS;
};

// DETECT AND CHECK POSITION
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
    scheduleSound(audio.eleven);
  } else if (checkPercentage(x, y, 5)) {
    console.log('5%');
    scheduleSound(audio.ten);
  } else if (checkPercentage(x, y, 10)) {
    console.log('10%');
    scheduleSound(audio.nine);
  } else if (checkPercentage(x, y, 20)) {
    console.log('20%');
    scheduleSound(audio.eight);
  } else if (checkPercentage(x, y, 30)) {
    console.log('30%');
    scheduleSound(audio.seven);
  } else if (checkPercentage(x, y, 40)) {
    console.log('40%');
    scheduleSound(audio.six);
  } else if (checkPercentage(x, y, 50)) {
    console.log('50%');
    scheduleSound(audio.five);
  } else if (checkPercentage(x, y, 60)) {
    console.log('60%');
    scheduleSound(audio.four);
  } else if (checkPercentage(x, y, 70)) {
    console.log('70%');
    scheduleSound(audio.three);
  } else if (checkPercentage(x, y, 80)) {
    console.log('80%');
    scheduleSound(audio.two);
  } else if (checkPercentage(x, y, 90)) {
    console.log('90%');
    scheduleSound(audio.one);
  } else if (checkPercentage(x, y, 100)) {
    console.log('100%');
    scheduleSound(audio.zero);
  }
};

// GAME OVER
const gameOver = () => {
  console.log('you win');
  clearInterval(audio.timer);

  cowImg.classList.remove('hidden');
  cowImg.classList.add('game-over');

  audio.win.play(audio.ctx.currentTime + 1.5);

  window.removeEventListener('mousemove', detectMousePosition);
};

// INITIALISE GAME
const startGame = () => {
  beginBtn.remove();
  container.classList.remove('start-game');

  cowImg = document.createElement('img');
  cowImg.src = './cow.svg';

  cowImg.classList.add('cow', 'hidden');

  // TODO - add transform: translate() if random number is within 30px of boundary to avoid cow being placed off screen
  cowY = randomNum(viewportHeight);
  cowX = randomNum(viewportWidth);

  cowImg.style.top = `${cowY}px`;
  cowImg.style.left = `${cowX}px`;

  container.appendChild(cowImg);

  createContext();

  window.addEventListener('mousemove', detectMousePosition);

  cowImg.addEventListener('click', gameOver);
};

beginBtn.addEventListener('click', startGame);
