/*Cara 1*/
// function sumArray(array) {
//   if (!array) {
//     return 0;
//   }

//   const sortedArray = array.sort((a, b) => a - b);
//   let result = 0;
//   for (let i = 1; i < array.length - 1; i++) {
//     result += sortedArray[i];
//   }

//   return result;
// }

/*Cara 2*/
// const sumArray = (array) => {
//   return Array.isArray(array) && array.length > 1
//     ? array.sort((a, b) => a - b).reduce((acc, num) => acc + num, 0) -
//         Math.min(...array) -
//         Math.max(...array)
//     : 0;
// };

/*Cara 3*/
const sumArray = (array) =>
  Array.isArray(array) && array.length > 1
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, num) => acc + num, 0)
    : 0;

console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([3]));
console.log(sumArray([3, 5]));
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([0, 1, 6, 10, 10]));
console.log(sumArray([-6, -20, -1, -10, -12]));
console.log(sumArray([-6, 20, -1, 10, -12]));

const array = [-6, -20, -1, -10, -12];
console.log(array.slice(1, -1));
