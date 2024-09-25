let a = [1, 2, 3, [4, [5, [6]]], [7, [[[8]]]]];

// let a = [7, [[[8]]]];
let b = [[1, 2], [[3], [4]], 5];

const getItemList = (item) => {
  let val;
  if (Array.isArray(item)) {
    item.forEach((element) => {
      if (Array.isArray(element)) {
        getItemList(element[0]);
      } else {
        val = element;
      }
    });
  } else {
    val = item;
  }
  return val;
};

function flatten(arr) {
  const list = [];
  for (let i = 0; i <= arr.length; i++) {
    list.push(getItemList(arr[i]));
  }
  return list;
}

console.log(flatten(a)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(flatten(b)); // Output: [1, 2, 3, 4, 5]
