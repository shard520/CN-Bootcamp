console.log('Hello World');
console.log('hello'.toUpperCase());

let num = Math.random() * 10;
console.log(num);

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

console.log('**** Manual ****');

console.log('   |   |   ');
console.log('   |   |   ');
console.log('   |   |   ');
console.log('-----------');
console.log('   |   |   ');
console.log('   |   |   ');
console.log('   |   |   ');
console.log('-----------');
console.log('   |   |   ');
console.log('   |   |   ');
console.log('   |   |   ');

console.log('\n');
console.log('**** For loop ****');
console.log('\n');

for (let i = 1; i < 12; i++) {
  if (i % 4 === 0) console.log('-----------');
  else console.log('   |   |   ');
}

console.log('\n');
console.log('**** Array and forEach ****');
console.log('\n');

const grid = [
  '   |   |   ',
  '   |   |   ',
  '   |   |   ',
  '-----------',
  '   |   |   ',
  '   |   |   ',
  '   |   |   ',
  '-----------',
  '   |   |   ',
  '   |   |   ',
  '   |   |   ',
];

grid.forEach(line => console.log(line));

console.table(grid);
