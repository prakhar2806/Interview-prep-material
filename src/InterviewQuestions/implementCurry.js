function simpleFunction(param1, param2, param3) {
  return param1 + param2 + param3;
}

// Curried function
function curriedFunction(param1) {
  return function (param2) {
    return function (param3) {
      return param1 + param2 + param3;
    };
  };
}

let sum = curriedFunction(10)(20)(30);
console.log(sum);
//////////////////////////

const curry = (fn) => {
  return function (...args) {
    console.log(args);
  };
};

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);
// curriedJoin(1, 2, 3); // '1_2_3'
//  curriedJoin(1)(2, 3) // '1_2_3'
curriedJoin(1, 2)(3); // '1_2_3'
