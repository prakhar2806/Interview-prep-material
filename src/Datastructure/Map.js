//MAP

// ordered collection of key value pair
// keys and value can be of any type

//difference between object and map
// keys are object are of same type, while maps keys can be anything
// map.size gives size while no way to find size of object
// maps only store valye while objects can have functions

const map = new Map([
  ["name", "virat"],
  ["hobby", "cricket"],
]);

map.set("city", "delhi");

console.log(map.size); // 3

map.delete("hobby"); //deletes hobby

console.log(map.has("name")); //true

for (let [key, value] of map) {
  console.log(key + " " + value);
}

map.clear(); //clears map
