// WPU Coding Challenge 2024
// 68/366
// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(array1, array2) {
  if (!array1 || !array2) {
    return false;
  }
  const sortedArr1 = array1.sort((a, b) => a - b).map((num) => num ** 2);
  const sortedArr2 = array2.sort((a, b) => a - b);

  return JSON.stringify(sortedArr2) === JSON.stringify(sortedArr1);
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
console.log(comp([], null));
