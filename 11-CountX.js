/*Cara 1*/
// function countBy(x, n) {
//     let z = [];

//     for(let i = 1; i <= n; i++) {
//         z.push(i * x)
//     }

//     return z;
//   }

/*Cara 2*/
const countBy = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x);

console.log(countBy(1, 10));
console.log(countBy(2, 5));
