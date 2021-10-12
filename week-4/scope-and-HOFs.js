const a = 'a';
const b = 'b';
const c = 'c';

console.log(a, b, c); // a b c

const myFunc = () => {
  const d = 'd';
  console.log(c, d); // c d

  const myFunc2 = () => {
    const d = 'D';
    const e = 'e';
    console.log(c, d, e); // c D e
  };

  if (true) {
    const e = 'E';
    console.log(d, e); // d E
  }

  myFunc2();
  // console.log(c, d, e); // e is undefined
};

myFunc();

// console.log(d, e); // d and e are undefined

const commute = transportType => {
  console.log(`Taking the ${transportType} to work today.`);
};

const vacation = transportType => {
  console.log(`I'm taking the ${transportType} to get to my hotel`);
};

const displayMsg = (param, fn) => {
  if (param === 'train') fn('train');
  else if (param === 'car') fn('car');
  else if (param === 'bike') fn('bike');
  else if (param === 'plane') fn('plane');
};

displayMsg('bike', commute);
displayMsg('car', commute);
displayMsg('plane', vacation);
displayMsg('train', vacation);
