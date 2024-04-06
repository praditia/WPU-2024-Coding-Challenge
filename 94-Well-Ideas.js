// WPU Coding Challenge 2024
// 94/366
// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

function well(x) {
  let good = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'good') {
      good++;
    }
  }

  return good == 0 ? 'Fail!' : good < 3 ? 'Publish!' : 'I smell a series!';
}

console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
console.log(
  well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])
);
