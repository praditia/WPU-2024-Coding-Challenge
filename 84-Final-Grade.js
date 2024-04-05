// WPU Coding Challenge 2024
// 84/366
// https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  }
  return 0;
}

console.log(finalGrade(100, 12));
console.log(finalGrade(85, 5));
console.log(finalGrade(0, 10));
console.log(finalGrade(90, 10));
console.log(finalGrade(90, 0));
console.log(finalGrade(50, 2));
console.log(finalGrade(50, 7));
