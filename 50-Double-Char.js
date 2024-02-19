// WPU Coding Challenge 2024
// 50/366
// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

function doubleChar(str) {
  return str
    .split('')
    .map((el) => el + el)
    .join('');
}

console.log(doubleChar('abcd'));
console.log(doubleChar('Adidas'));
console.log(doubleChar('1337'));
