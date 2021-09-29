function reverser(str) {
  const reversed = String(str).split('').reverse().join('');
  return reversed;
}

console.log(reverser("Hello, look I'm backwards now"));
console.log(reverser("1243, that's numberwang!"));
console.log(reverser('!./,;`\n22lpw'));
console.log(reverser(123456789));
