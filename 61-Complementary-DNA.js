// WPU Coding Challenge 2024
// 61/366
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

/* Cara 1 */
// function dnaStrand(dna) {
//   return dna
//     .split('')
//     .map((sym) =>
//       sym === 'A'
//         ? 'T'
//         : sym === 'T'
//         ? 'A'
//         : sym === 'C'
//         ? 'G'
//         : sym === 'G'
//         ? 'C'
//         : sym
//     )
//     .join('');
// }

/* Cara 2 */
const DNApairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
};

const dnaStrand = (dna) =>
  dna
    .split('')
    .map((sym) => DNApairs[sym])
    .join('');

console.log(dnaStrand('AAAA'));
console.log(dnaStrand('ATTGC'));
console.log(dnaStrand('GTAT'));
