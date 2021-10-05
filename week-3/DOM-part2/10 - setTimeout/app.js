const button = document.querySelector('#run');
const heading = document.querySelector('#heading');

button.addEventListener('click', () => {
  const colour = prompt('Please enter a colour');

  setTimeout(() => {
    heading.style.color = colour;
  }, 3000);
});
