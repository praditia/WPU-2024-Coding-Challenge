// WPU Coding Challenge 2024
// 66/366
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

/* Cara 1 */
// function findNeedle(haystack) {
//   let needleIndex = 0;
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === 'needle') {
//       needleIndex += i;
//     }
//   }

//   return `found the needle at position ${needleIndex}`;
// }

/* Cara 2 */
const findNeedle = (haystack) =>
  `found the needle at position ${haystack.indexOf('needle')}`;

console.log(
  findNeedle([
    '3',
    '123124234',
    undefined,
    'needle',
    'world',
    'hay',
    2,
    '3',
    true,
    false,
  ])
);
