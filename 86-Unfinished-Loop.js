// WPU Coding Challenge 2024
// 86/366
// https://www.codewars.com/kata/55c28f7304e3eaebef0000da/train/javascript

function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

console.log(createArray(1));
console.log(createArray(2));
console.log(createArray(3));
console.log(createArray(4));
console.log(createArray(5));
