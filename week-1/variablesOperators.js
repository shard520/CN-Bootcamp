let firstName = 'Alec';
let age = 77;
let favouriteColour = 'blue';

console.log(
  `My name is ${firstName}, I'm ${age} years old and my favourite colour is ${favouriteColour}.`
);

firstName = 'Dave';
age = 23;
favouriteColour = 'blue';

console.log(
  `My name is ${firstName}, I'm ${age} years old and my favourite colour is ${favouriteColour}.`
);

let breakfast = 'cereals';
let lunch = 'bacon butties';
let tea = 'bolognese';

console.log(
  `Yesterday I had ${breakfast} for breakfast, for lunch I had ${lunch} and for tea I had ${tea}.`
);

breakfast = 'toast';
lunch = 'soup';
tea = 'lasagne';

console.log(
  `Today I had ${breakfast} for breakfast, for lunch I'm going to have ${lunch} and for tea I'll have ${tea}.`
);

const nextChristmas = new Date('2021-12-25');

const today = new Date();

const timeTillChristmas = nextChristmas.getTime() - today.getTime();
const daysTillChristmas = Math.floor(timeTillChristmas / 1000 / 60 / 60 / 24);

console.log(`It's ${daysTillChristmas} days till Christmas 🎅🎄`);

let space1 = 'o';
let space2 = 'x';
let space3 = ' ';
let space4 = 'o';
let space5 = 'o';
let space6 = 'x';
let space7 = 'x';
let space8 = ' ';
let space9 = 'o';

const grid = [
  '   |   |   ',
  ` ${space1} | ${space2} | ${space3} `,
  '   |   |   ',
  '-----------',
  '   |   |   ',
  ` ${space4} | ${space5} | ${space6} `,
  '   |   |   ',
  '-----------',
  '   |   |   ',
  ` ${space7} | ${space8} | ${space9} `,
  '   |   |   ',
];

grid.forEach(line => console.log(line));
