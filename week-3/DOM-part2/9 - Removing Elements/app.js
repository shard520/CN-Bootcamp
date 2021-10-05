const input = document.querySelector('#input');
const submitBtn = document.querySelector('#submit');
const removeBtn = document.querySelector('#remove');
const list = document.querySelector('#list');

submit.addEventListener('click', () => {
  const listItem = `<li>${input.value}</li>`;

  list.insertAdjacentHTML('beforeend', listItem);

  input.value = '';
});

removeBtn.addEventListener('click', () => {
  const listItem = document.querySelector('li:last-child');

  list.removeChild(listItem);
});
