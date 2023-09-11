Function.prototype.myCall = function (obj, ...args) {
  obj.func = this;
  return obj.func(...args);
};
Function.prototype.myApply = function (obj, args) {
  obj.func = this;
  return obj.func(...args);
};
Function.prototype.myBind = function (obj, ...args) {
  obj.func = this;
  return function () {
    return obj.func(...args);
  };
};
Object1 = {
  fname: "manas",
  lname: "sr",
};
function display(age) {
  console.log(this.fname, this.lname, age);
}
display.myCall(Object1, 20);
display.myApply(Object1, [20]);
let temp = display.myBind(Object1, 20);
temp();
// Function.prototype.myBind = function (obj, ...rest) {
//   obj.func = this;
//   return function () {
//     console.log(...rest, obj);

//     return obj.func(...rest);
//   };
// };
