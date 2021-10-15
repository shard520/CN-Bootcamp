const _ = require('lodash');

const os = require('os');
const fs = require('fs');

// const calcFunctions = require('./calcFunctions');
const { add, multiply } = require('./calcFunctions');
const { divide } = require('./divide');

// console.log(calcFunctions.multiply(10, 5));
// console.log(calcFunctions.add(2, 3));

console.log(multiply(10, 5));
console.log(add(2, 3));

console.log(divide(20, 2));

let freeMem = os.freemem();

fs.appendFile(
  'freemem.txt',
  `you have ${freeMem} bytes of memory available\n`,
  err => {
    if (err) {
      console.log('oops');
    }
  }
);

const str = 'thisIsAString';

const strKebab = _.kebabCase(str);
console.log(strKebab);

const words = 'capitalise the first word';
const wordsCapitalised = _.capitalize(words);
console.log(wordsCapitalised);

console.log(_.head(['a', 'b', 'c']));
console.log(_.nth([1, 2, 3, 4, 5, 6, 7], 4));
