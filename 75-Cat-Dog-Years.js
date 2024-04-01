// WPU Coding Challenge 2024
// 75/366
// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 15;
  let dogYears = 15;

  if (humanYears > 2) {
    catYears = catYears + humanYears * 4 + 1;
    dogYears = dogYears + humanYears * 5 - 1;
  } else {
    catYears += 9;
    dogYears += 9;
  }

  return [humanYears, catYears, dogYears];
};

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(3));
console.log(humanYearsCatYearsDogYears(10));
