const user = {
  fname: "prakhar",
  lname: "nigam",
};

// Bind
let getbindUserName = function () {
  console.log("bind" + " " + this.fname + " " + this.lname);
};

const userData = getbindUserName.bind(user);
userData();

// call
let getCallUserName = function (data) {
  console.log("Call" + " " + this.fname + " " + this.lname + "," + data);
};

getCallUserName.call(user, "abc");

//apply

let getApplyUserName = function (a) {
  console.log("Apply" + " " + this.fname + " " + this.lname + "," + a);
};

getApplyUserName.call(user, ["abc", "def"]);
