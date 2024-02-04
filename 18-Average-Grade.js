// WPU Coding Challenge 2024
// 18/366
// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

/* Cara 1 */
// function betterThanAverage(classPoints, yourPoints) {
//   let average =
//     classPoints.reduce((acc, point) => acc + point, 0) / classPoints.length;
//   return average < yourPoints;
// }

/* Cara 2 */
// const betterThanAverage = (classPoints, yourPoints) =>
//   yourPoints >
//   classPoints.reduce((acc, point) => acc + point, 0) / classPoints.length;

/* Cara 3 */
const betterThanAverage = (classPoints, yourPoints) => {
  let average = 0;
  for (let i = 0; i < classPoints.length; i++) {
    average += classPoints[i];
  }
  return average / classPoints.length < yourPoints;
};

console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
