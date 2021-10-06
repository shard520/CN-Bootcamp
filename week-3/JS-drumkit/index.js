const drumContainer = document.querySelector('.drum__container');

// AUDIO OBJECTS
audioFiles = {
  kick: new Audio('sounds/kick.wav'),
  clap: new Audio('sounds/clap.wav'),
  snare: new Audio('sounds/snare.wav'),
  tom: new Audio('sounds/tom.wav'),
  boom: new Audio('sounds/boom.wav'),
  tink: new Audio('sounds/tink.wav'),
  hihat: new Audio('sounds/hihat.wav'),
  openhat: new Audio('sounds/openhat.wav'),
  ride: new Audio('sounds/ride.wav'),
};

// PLAY FUNCTION
const playSound = drum => {
  // Pause sound, reset time to start, then play
  audioFiles[drum].pause();
  audioFiles[drum].currentTime = 0;
  audioFiles[drum].play();
};

// KEY SWITCH FUNCTION
const keySwitch = letter => {
  switch (letter) {
    case 'a':
      playSound('kick');
      break;
    case 's':
      playSound('clap');
      break;
    case 'd':
      playSound('snare');
      break;
    case 'w':
      playSound('tom');
      break;
    case 'e':
      playSound('boom');
      break;
    case 'r':
      playSound('tink');
      break;
    case 'i':
      playSound('hihat');
      break;
    case 'o':
      playSound('openhat');
      break;
    case 'p':
      playSound('ride');
      break;
    default:
      break;
  }
};

// CLICK EVENT LISTENER
drumContainer.addEventListener('click', e => {
  const { id } = e.target;
  if (!id) return;

  playSound(id);
});

// KEYPRESS EVENT LISTENER
window.addEventListener('keydown', e => {
  // Use event.code for the same key whether or not caps lock is on
  const { code } = e;
  // Trim the code to only the letter
  const letter = code.slice(-1).toLowerCase();

  keySwitch(letter);
});
