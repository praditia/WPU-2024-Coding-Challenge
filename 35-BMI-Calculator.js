// WPU Coding Challenge 2024
// 35/366
// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
function bmi(weight, height) {
  const calc = weight / height ** 2;

  switch (true) {
    case calc <= 18.5:
      return 'Underweight';
      break;
    case calc <= 25.0:
      return 'Normal';
      break;
    case calc <= 30.0:
      return 'Overweight';
      break;
    case calc > 30:
      return 'Obese';
      break;
    default:
      return 'Enter valid number';
      break;
  }
}

console.log(bmi(80, 1.8));
