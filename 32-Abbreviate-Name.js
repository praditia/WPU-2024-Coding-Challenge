// WPU Coding Challenge 2024
// 32/366
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name) {
  return name
    .toUpperCase()
    .split(' ')
    .map((el) => el[0])
    .join('.');
}

console.log(abbrevName('Sam Harris'));
