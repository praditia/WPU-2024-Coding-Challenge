// WPU Coding Challenge 2024
// 91/366
// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

/* Cara 1 */
// function findMultiples(integer, limit) {
//   let numbers = [];

//   for (let i = 1; i <= limit / integer; i++) {
//     numbers.push(integer * i);
//   }

//   return numbers;
// }

/* Cara 2 */
const findMultiples = (integer, limit) => {
  let numbers = [];

  for (let i = integer; i <= limit; i += integer) {
    numbers.push(i);
  }

  return numbers;
};

console.log(findMultiples(5, 25));
console.log(findMultiples(1, 2));
console.log(findMultiples(5, 7));
console.log(findMultiples(4, 27));
console.log(findMultiples(11, 54));
