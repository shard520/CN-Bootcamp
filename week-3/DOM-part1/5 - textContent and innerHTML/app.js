const heading = document.querySelector('#placeholder');
const input = document.querySelector('#input');
const submitBtn = document.querySelector('#submit');
const list = document.querySelector('#list');

const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];

submit.addEventListener('click', () => {
  heading.innerText = input.value;

  const num = Math.floor(Math.random() * colours.length);
  const colour = colours[num];

  const listItem = `<li style="color: ${colour}">${input.value}</li>`;

  list.insertAdjacentHTML('beforeend', listItem);
});
