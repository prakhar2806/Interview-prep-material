let myName = {
  firstName: "sachin",
  lastname: "tendulkar",
  getFullName: function () {
    return "my name is " + this.firstName + " " + this.lastname;
  },
  getNameAndCity: function (city) {
    return "my name is " + this.firstName + " " + this.lastname + ", " + city;
  },
};

function getNameCityState(city, state) {
  return (
    "my name is " +
    this.firstName +
    " " +
    this.lastname +
    ", " +
    city +
    ", " +
    state
  );
}

// myName.getFullName();
// resut:  my name is sachin tendulkar

let name2 = {
  firstName: "virat",
  lastname: "kohli",
};

// myName.getFullName.call(name2);
// result: my name is virat kohli

const user = myName.getFullName;

//console.log(user()); // error

console.log(user.call(name2)); // virat kohli

console.log(myName.getFullName()); // sachin tendulkar

console.log("call when function is inside");

console.log(myName.getNameAndCity("mumbai")); //sachin tendulkar mumbai

console.log(myName.getNameAndCity.call(name2, "delhi")); //virat kohli delhi

// getName and getNameAndCity are isnide name object, if they are outside then it can be called directly like
// getNameAndCity.call(name, "mumbai") and getNameAndCity(name2, "mumbai")

console.log(
  "call when function is outside : ",
  getNameCityState.call(myName, "mumbai", "Maharashtra")
); // my name is sachin tendulkar, mumbai, Maharashtra

//APPLY

console.log("Apply: ", getNameCityState.apply(name2, ["london", "UK"])); // my name is virat kohli, london, UK

// BIND

let printMyName = getNameCityState.bind(myName, "mumbai", "Maharashtra");
// creates a function that can be used LATER
console.log("BIND", printMyName());
