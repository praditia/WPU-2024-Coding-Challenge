// WPU Coding Challenge 2024
// 85/366
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript

function squareOrSquareRoot(array) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    let sqrRoot = Math.ceil(Math.pow(array[i], 0.5));
    if (array[i] == sqrRoot ** 2) {
      newArr.push(sqrRoot);
    } else {
      newArr.push(array[i] ** 2);
    }
  }

  return newArr;
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
console.log(squareOrSquareRoot([100, 101, 5, 5, 1, 1]));
console.log(squareOrSquareRoot([1, 2, 3, 4, 5, 6]));
