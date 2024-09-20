let myName = {
  firstName: "sachin",
  lastname: "tendulkar",
  getFullName: function () {
    return "my name is " + this.firstName + " " + this.lastname;
  },
};

// myName.getFullName();
// resut:  my name is sachin tendulkar

let name2 = {
  firstName: "virat",
  lastname: "kohli",
};

// myName.getFullName.call(name2);
// result: my name is virat kohli

const user = myName.getFullName;

console.log(user()) // error

console.log(user.call(name2)); // virat kohli

console.log(myName.getFullName()); // sachin tendulkar
