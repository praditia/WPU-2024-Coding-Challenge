// WPU Coding Challenge 2024
// 62/366
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

/* Cara 1 */
// function twoSort(s) {
//   const wordSort = s.sort()[0];

//   const starWord = wordSort
//     .split('')
//     .slice(0, -1)
//     .map((el) => el + '***')
//     .join('');
//   const lastLetter = wordSort.split('').slice(-1).join('');
//   return starWord + lastLetter;
// }

/* Cara 2 */
const twoSort = (s) => s.sort()[0].split('').join('***');

console.log(
  twoSort([
    'bitcoin',
    'take',
    'over',
    'the',
    'world',
    'maybe',
    'who',
    'knows',
    'perhaps',
  ])
);

console.log(
  twoSort([
    'turns',
    'out',
    'random',
    'test',
    'cases',
    'are',
    'easier',
    'than',
    'writing',
    'out',
    'basic',
    'ones',
  ])
);
