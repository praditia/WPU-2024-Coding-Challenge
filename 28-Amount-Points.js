// WPU Coding Challenge 2024
// 28/366
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

/* Cara 1 */
// function points(games) {
//     let points = 0
//     for(let i = 0; i < games.length; i++) {
//         if(games[i][0] > games[i][2]) {
//             points += 3
//         } else if (games[i][0] === games[i][2]) {
//             points += 1
//         }
//     }
//     return points
// }

/* Cara 2 */
const points = (games) =>
  games.reduce((acc, [x, _, y]) => (x > y ? 3 : x === y ? 1 : 0) + acc, 0);

console.log(
  points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])
);
console.log(
  points(['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4'])
);
console.log(
  points(['0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4'])
);
