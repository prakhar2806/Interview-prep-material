let newArr = [];
let newDepth = 0;
function flat(arr, depth = 1) {
  const flattened = [];
  arr.forEach((element) => {
    if (Array.isArray(element) && depth > 0) {
      flattened.push(...flat(element, depth - 1));
    } else {
      flattened.push(element);
    }
  });
  return flattened;
}

const arr = [1, [2], [3, [4]]];
console.log(flat(arr));
// [1, 2, 3, [4]]
console.log(flat(arr, 1));
// [1, 2, 3, [4]]
console.log(flat(arr, 2));
// [1, 2, 3, 4]
