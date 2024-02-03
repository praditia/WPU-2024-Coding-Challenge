/* Cara 1 */
// const countSheep = (num) => {
//   let result = '';
//   for (let i = 1; i <= num; i++) {
//     result += `${i} sheep...`;
//   }

//   return result;
// };

/* Cara 2 */
const countSheep = (num) =>
  [...Array(num)].map((_, i) => i + 1 + ' sheep...').join('');

console.log(countSheep(3));
