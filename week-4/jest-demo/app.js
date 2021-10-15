const add = (a, b) => {
  return a + b;
};

const isArray = arr => {
  return Array.isArray(arr);
};

const makeObj = (prop1, prop2, val1, val2) => {
  return {
    [prop1]: val1,
    [prop2]: val2,
  };
};

const checkLongArrEl = arr => {
  return arr.filter(item => item.length >= 6);
};

const convertNumToStr = num => {
  if (typeof num !== 'number') return;
  return String(num);
};

const planetFinder = num => {
  const planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
  ];
  return planets[num - 1];
};

const checkAttendance = arr => {
  return arr.filter(item => item).length;
};

const squareAndConcat = num => {
  const arr = String(num).split('');
  const squaredArr = arr.map(num => num * num);
  return +squaredArr.join('');
};

const whatCentury = num => {
  return +String(num).slice(0, 2);
};

const returnIntFromBinaryArr = arr => {
  arr.reverse();
  return arr.map((num, i) => num * 2 ** i).reduce((acc, num) => num + acc);
};

module.exports = {
  add,
  isArray,
  makeObj,
  checkLongArrEl,
  convertNumToStr,
  planetFinder,
  checkAttendance,
  squareAndConcat,
  whatCentury,
  returnIntFromBinaryArr,
  movies: ['Bill and Ted', 'Labyrinth', 'Never Ending Story'],
};
