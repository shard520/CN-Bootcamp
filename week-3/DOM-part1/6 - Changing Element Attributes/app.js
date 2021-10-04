const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const image = document.querySelector('#image');

submit.addEventListener('click', () => {
  image.src = input.value;
  image.style.borderRadius = '50%';
  image.style.padding = '1.5rem';
});
