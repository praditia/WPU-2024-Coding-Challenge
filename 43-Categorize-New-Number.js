// WPU Coding Challenge 2024
// 43/366
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

/* Cara 1 */
// function openOrSenior(data) {
//   let member = [];
//   for (let person = 0; person < data.length; person++) {
//     if (data[person][0] >= 55 && data[person][1] > 7) {
//       member.push('Senior');
//     } else {
//       member.push('Open');
//     }
//   }
//   return member;
// }

/* Cara 2 */
const openOrSenior = (data) =>
  data.map(([age, cap]) => (age >= 55 && cap > 7 ? 'Senior' : 'Open'));

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ])
);
console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ])
);
