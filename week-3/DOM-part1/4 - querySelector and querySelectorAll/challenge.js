const greens = document.querySelectorAll('.green');
const listItems = document.querySelectorAll('li');
const heading = document.querySelector('#heading');

const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];

let j = 0;
for (let i = 0; i < listItems.length; i++) {
  if (i >= colours.length) j = i - colours.length;

  listItems[i].style.color = colours[j];

  j++;
}
