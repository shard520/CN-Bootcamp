let topping = 'Mushrooms';

switch (topping) {
  case 'Ham':
  case 'Pepperoni':
    console.log(`${topping} is a great pizza topping`);
    break;
  case 'Sweetcorn':
  case 'Green Pepper':
    console.log(`${topping} is ok as a pizza topping`);
    break;
  case 'Mushrooms':
  case 'Anchovies':
    console.log(`${topping} should not be anywhere near a pizza`);
    break;
  default:
    console.log(`${topping} might be ok on a pizza`);
}

let password = '123abc456def';

if (password.length < 8) {
  console.log(
    'Your password is too short, please enter a minimum of 8 characters.'
  );
} else console.log('Password accepted');

let num = 365;
if (num % 3 === 0 || num % 5 === 0)
  console.log(`${num} is divisible by 3 or 5.`);
else console.log(`${num} is not divisible by 3 or 5.`);

let fizzNum = 46280;
if (fizzNum % 3 === 0 && fizzNum % 5 === 0) console.log('fizz buzz');
else if (fizzNum % 3 === 0) console.log('fizz');
else if (fizzNum % 5 === 0) console.log('buzz');
else console.log(fizzNum);

let palinNum = 123321;
let reverseNum = Number(palinNum.toString().split('').reverse().join(''));

if (palinNum === reverseNum) console.log(`${palinNum} is a palindrome.`);
else console.log(`${palinNum} is not a palindrome.`);

let time = 18;

if (time >= 9 && time <= 17) console.log("I'm at work");
else if (time === 8 || time === 18) console.log("I'm commuting");
else console.log("I'm at home");

let longString =
  'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';

const vowels = ['a', 'e', 'i', 'o', 'u'];
let max = 0;

vowels.forEach(vowel => {
  let indexNum = longString.lastIndexOf(vowel);
  if (indexNum >= max) max = indexNum;
  return max;
});
console.log(max);

const word = 'ships';

if (word[0] === word[word.length - 1]) console.log(true);
else console.log(false);

let num1 = 3;
let num2 = 128;
let sum = num1 + num2;

if (sum % 2 === 0) console.log(sum);
else console.log(num1 * num2);
