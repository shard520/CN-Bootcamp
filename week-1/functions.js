let coffeeIsGrinding = false;

const pressGrindBeans = () => {
  if (coffeeIsGrinding) {
    console.log('Stopping the grind');
    coffeeIsGrinding = false;
  } else {
    console.log('Grinding is about to begin');
    coffeeIsGrinding = true;
  }
};

pressGrindBeans();
pressGrindBeans();

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const sum1 = add(5, 4);
console.log(sum1);

const calculator = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
};

console.log(calculator(2, 3, '*'));

// Activity 1
const factorial = n => {
  if (n === 0 || n === 2) return 1;
  else return n * factorial(n - 1);
};

console.log(factorial(8));

// Activity 2
let orderCount = 0;
const takeOrder = (topping1, topping2) => {
  console.log(`Pizza with ${topping1} and ${topping2} coming up...`);
  orderCount++;
  console.log(`Your order is number ${orderCount}.`);
};

takeOrder('pepperoni', 'jalapenos');
takeOrder('ham', 'pineapple');

// Activity 3
const pin = 2222;
let balance = 1000;

const cashMachine = (pin, amount, transaction) => {
  if (pin !== 2222) {
    return console.log('Incorrect pin, please try again');
  } else if (transaction === 'withdraw' && balance - amount >= 0) {
    balance -= amount;
    return console.log(
      `You have withdrawn ${amount}, your new balance is ${balance}.`
    );
  } else if (transaction === 'withdraw' && balance - amount < 0) {
    return console.log(
      `You have insufficient funds in your account, your balance is ${balance}.`
    );
  } else if (transaction === 'pay in') {
    balance += amount;
    return console.log(
      `You have paid in ${amount}, your new balance is ${balance}.`
    );
  } else
    return console.log(
      `Unknown error; your account balance is unchanged. Please try your transaction again.`
    );
};

cashMachine(1111, 300, 'withdraw');
cashMachine(2222, 3000, 'withdraw');
cashMachine(2222, 1000, 'pay in');
cashMachine(2222, 1500, 'withdraw');
cashMachine(2222, 500, 'add');
cashMachine(2222, 500, 'pay in');
cashMachine(2222, 1000, 'withdraw');
