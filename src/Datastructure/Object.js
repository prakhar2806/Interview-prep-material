const obj = {
  name: "virat",
  age: 34,
  lastname: "kohli",
  myName: function () {
    console.log(this.name + " " + this.lastname);
  },
};

obj.hobby = "football";

console.log(obj.name); // virat
console.log(obj["name"]); // virat
console.log(obj.lastname); // kohli
console.log(obj["lastname"]); // kohli

console.log(obj); // object includes hobby

delete obj.hobby; // removes hobby

obj.myName();

// Object.keys() .values() .entries()

// Insert / Remove - O(1);
// Access - O(1);
// Search - O(n);
// Object.keys - O(n);
// Object.values - O(n);
// Object.entries - O(n);
