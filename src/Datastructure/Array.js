const arr = [1, 2, 3, "prakhar"];
arr.push(4); // 1,2,3,"prakhar",4
arr.unshift(0); // 0,1,2,3,"prakhar",4
arr.pop() // 0,1,2,3,"prakhar"
arr.shift() // 1,2,3,"prakhar"

for (const item of arr) {
  console.log(item);
}

//map, filter, reduce, concat, slice and splice

// Array big 0
// Inseet/remove from end - O(1)
// Insert/remove from beg - O(n) //because index is reset for every element
// Access - O(1)
// Searching - O(n)
// push/pop - O(1)
// shift/unshift/concat/slice/splice -O(n)
// forEach/map/filter/reduce -O(n)