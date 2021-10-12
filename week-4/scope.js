const a = 'a';
const b = 'b';
const c = 'c';

console.log(a, b, c); // a b c

const myFunc = () => {
  const d = 'd';
  console.log(c, d);

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
  console.log(c, d, e); // e is undefined
};

myFunc();

console.log(d, e); // d and e are undefined
