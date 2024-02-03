/*Cara 1*/
// const addBinary = (a, b) =>(a + b).toString(2)

/* Cara 2 */
const addBinary = (a, b) => {
  let result = a + b;
  let binary = [];

  if (result === 0) {
    binary = '0';
  }
  while (result > 0) {
    binary.push(result % 2);
    result = Math.floor(result / 2);
  }

  return binary.reverse().join('');
};

console.log(addBinary(15, 0));
