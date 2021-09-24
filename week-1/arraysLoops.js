let coffeeOrder = ['Tom - Black coffee', 'Dick - Latte', 'Harry - Cappucino'];

console.log(coffeeOrder);
console.log(coffeeOrder[2]);

coffeeOrder[2] = 'Bob - Flat white';
console.log(coffeeOrder);

coffeeOrder.push('Chris - Mocha');
console.log(coffeeOrder);

const favSongs = ['Little Wing', 'Paradise City', 'Tender Surrender'];
console.log(favSongs);

favSongs.unshift('Altitudes', 'Cliffs of Dover');
console.log(favSongs);

favSongs.pop();
console.log(favSongs);

const favSongsList = favSongs.map((song, i) => `Song ${i + 1}: ${song}`);
console.log(favSongsList);

const songsWithShortNames = favSongs.filter(song => song.length < 10);
console.log(songsWithShortNames);

const favDrinks = ['Coffee', 'Tea', 'Beer', 'Whiskey'];
for (let i = 0; i < favDrinks.length; i++) {
  console.log(favDrinks[i]);
}

const multiplesTwo = [];

for (let i = 0; i < 2000; i++) {
  if (i % 2 === 0) multiplesTwo.push(i);
}
console.log(multiplesTwo.length);

const multiplesThree = [];

for (let i = 0; i < 3000; i++) {
  if (i % 3 === 0) multiplesThree.push(i);
}
console.log(multiplesThree.length);

let age = 15;

while (age < 18) {
  console.log('You are a child!');
  age++;
}
console.log('Welcome to adulthood!');

// Activity 1
favFilms = ['The Dark Knight', 'Bill & Ted', 'Time Bandits'];

favFilms.push('Back to the Future', '24 Hour Party People');

for (let i = 0; i < favFilms.length; i++) console.log(favFilms[i]);

// Activity 2
let randNums = [];
for (let i = 0; i <= 6; i++) {
  const num = Math.floor(Math.random() * 50 + 1);
  randNums.push(num);
}

console.log(randNums);

// Activity 3
for (let i = 9; i >= 0; i--) console.log(i);

// Activity 4
for (let i = 0; i < favFilms.length; i++) {
  if (i === 2 && favFilms[2] === 'Ghostbusters')
    console.log("Yay it's Ghostbusters!");
  else if (i === 2) console.log('Boo, we want Ghostbusters!');
  else console.log(favFilms[i]);
}

// Activity 5
for (let i = 0; i <= 6; i++) {
  const num = Math.floor(Math.random() * 30 + 1);
  if (num % 7 === 0) console.log(`${num} is divisible by 7`);
  else console.log(`${num} is not divisible by 7`);
}

// Activity 6
const bobsFollowers = ['Terry', 'Anna', 'Chris', 'Lucy'];
const hannahsFollowers = ['Anna', 'Claire', 'Fred', 'Wilma'];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < hannahsFollowers.length; j++) {
    if (bobsFollowers[i] === hannahsFollowers[j])
      console.log(`Bob and Hannah both follow ${bobsFollowers[i]}.`);
  }
}

// Activity 7
let whileNum = 0;
while (whileNum < 10) {
  console.log(whileNum);
  whileNum++;
}

let doNum = 0;
do {
  console.log(doNum);
  doNum++;
} while (doNum < 10);
