// WPU Coding Challenge 2024
// 24/366
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

/* Cara 1 */
// function validatePIN(pin) {
//   const re = /^(\d{4}|\d{6})$/;

//   return pin.match(re) ? true : false;
// }

/* Cara 2 */
// const validatePIN = (pin) => /^(\d{4}|\d{6})$/.test(pin)

/* Cara 3 */
const validatePIN = (pin) => {
  const correctLength = pin.length === 4 || pin.length === 6;
  const onlyNum = /^\d+$/.test(pin);
  return correctLength && onlyNum;
};
console.log(validatePIN('1'));
console.log(validatePIN('1234'));
console.log(validatePIN('123456'));
console.log(validatePIN('1234567'));
console.log(validatePIN('a234'));
