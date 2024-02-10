// WPU Coding Challenge 2024
// 29/366
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

function getGrade(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;

  //   if (score >= 90 && score <= 100) {
  //     return 'A';
  //   } else if (score >= 80 && score < 90) {
  //     return 'B';
  //   } else if (score >= 70 && score < 80) {
  //     return 'C';
  //   } else if (score >= 60 && score < 70) {
  //     return 'D';
  //   } else {
  //     return 'F';
  //   }
  switch (true) {
    case score >= 90 && score <= 100:
      return 'A';
      break;
    case score >= 80 && score < 90:
      return 'B';
      break;
    case score >= 70 && score < 80:
      return 'C';
      break;
    case score >= 60 && score < 70:
      return 'D';
      break;
    case score >= 0 && score < 60:
      return 'F';
      break;
    default:
      return 'Please enter valid value';
      break;
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(82, 85, 87));
console.log(getGrade(75, 70, 79));
console.log(getGrade(66, 62, 68));
console.log(getGrade(48, 55, 52));
