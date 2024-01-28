/*Cara 1*/
// function maskify(cc) {
//   if (cc.length < 5) {
//     return cc;
//   }
//   let masked = '';
//   let noMasked = '';
//   for (let i = 0; i < cc.length - 4; i++) {
//     masked += '#';
//   }

//   for (let j = cc.length - 4; j < cc.length; j++) {
//     noMasked += cc[j];
//   }

//   return masked + noMasked;
// }

/*Cara 2*/
const maskify = (cc) => cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);

console.log(maskify('4556364607935616'));
console.log(maskify('1'));
console.log(maskify('11111'));
