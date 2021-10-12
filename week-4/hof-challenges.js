// Challenge 1
const logHello = () => {
  console.log('Hello Code Nation');
};

const doXTimes = (num, fn) => {
  for (let i = 0; i < num; i++) {
    fn();
  }
};

doXTimes(5, logHello);

// Challenge 2
const sum = (x, y) => {
  return x + y;
};

const sumTotals = (x, y, fn) => {
  let total = 0;
  for (let i = 0; i < 5; i++) {
    total += fn(x, y);
  }
  return total;
};

console.log(sumTotals(2, 3, sum));

// Challenge 3
const nums = [1, 2, 3, 4, 5];

const tripledNums = nums.map(num => num * 3);
console.log(nums, tripledNums);

// Challenge 4
const multiply = (a, b) => a * b;

const add = (a, b) => a + b;

const divide = (a, b) => a / b;

const subtract = (a, b) => a - b;

const doMath = num1 => {
  return (num2, fn) => {
    return fn(num1, num2);
  };
};

console.log(doMath(2)(3, add));
const num1 = doMath(2);
console.log(num1(3, multiply));
