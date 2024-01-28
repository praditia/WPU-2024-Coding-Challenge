/*Cara 1*/
// function powersOfTwo(n) {
//   let array = [];
//   for (let i = 0; i < n + 1; i++) {
//     array.push(2 ** i);
//   }

//   return array;
// }

/*Cara 2*/
const powersOfTwo = (n) => [...Array(n + 1)].map((_, i) => Math.pow(2, i));

console.log(powersOfTwo(4));
console.log(powersOfTwo(1));
console.log(powersOfTwo(0));
