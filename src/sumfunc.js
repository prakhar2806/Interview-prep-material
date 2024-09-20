// function sum(num1) {
//   return function (val) {
//     if (val) {
//       return sum(val + num1);
//     } else {
//       return num1;
//     }
//   };
// }

function sum(num1) {
  return function (num2) {
    if (num2) {
      return sum(num1 + num2);
    } else {
      return num1;
    }
  };
}

const sum1 = sum(1);
console.log(sum1(2)); // true
console.log(sum1(3)); // true
console.log(sum(1)(2)(3)); // true
console.log(sum(5)(-1)(2)); // true
