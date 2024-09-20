const user = {
  fname: "prakhar",
  lname: "nigam",
};

let getUserName = function (hometown, state) {
  console.log(this.fname + " " + this.lname + " " + hometown + " " + state);
};

const userData = getUserName.bind(user, "gwalior");
userData("MP");

Function.prototype.myBind = function (...args) {
  const obj = this;
  const param = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...param, ...args2]);
  };
};

const getUserdata = getUserName.myBind(user, "gwalior");

getUserdata("MP");
