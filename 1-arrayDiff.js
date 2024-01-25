// WPU Coding Challenge 2024
// 1/366
// https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
  /*Cara 1*/
  // let unique = [];
  // for (let i = 0; i < a.length; i++) {
  //   if (b.indexOf(a[i]) === -1) {
  //     unique.push(a[i]);
  //   }
  // }

  /*Cara 2*/
  return a.filter((el) => b.indexOf(el) === -1);
}

console.log(arrayDiff([1, 1, 2], [2]));

const a = [1, 2, 2, 4];
const b = 3;
console.log(a.indexOf(b));
