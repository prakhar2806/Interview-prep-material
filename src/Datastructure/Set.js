// set can hold collection of value
// values need to be unique
// values can be of different type: string, bool, numbers, objects
// dynamicallly sized, no need to set size before creation
//set do not maintain insertion order
// iterated using for of loop

const set = new Set([1, 2, 3]);

set.add(4);
set.add(4); // only adds once, duplicates are ignored

set.has(4); //true

set.size; // 4

set.delete(3); //deletes 3

for (const item of set) {
  console.log(item); // 1 2 3
}

set.clear(); //empties the set
