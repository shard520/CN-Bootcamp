const bigNumEl = document.querySelector('.key-number');
const eventKey = document.querySelector('#eventKey');
const eventCode = document.querySelector('#eventCode');
const eventWhich = document.querySelector('#eventWhich');
const infoContainer = document.querySelector('.info-container');

window.addEventListener('keydown', e => {
  if (infoContainer.classList.contains('u-display-none')) {
    infoContainer.classList.remove('u-display-none');
    bigNumEl.classList.remove('u-font-size-md');
  }

  const { code, key, which } = e;

  bigNumEl.innerText = eventWhich.innerText = which;
  eventKey.innerText = key;
  eventCode.innerText = code;
});
