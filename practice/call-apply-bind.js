function printName(city, country) {
  console.log(`${this.firstName} ${this.lastName}, ${city} - ${country}`);
}

const myName = {
  firstName: "Anshul",
  lastName: "Pinto",
};

Function.prototype.myCall = function (ctx, ...args) {
  // takes ctx and makes it this of callee
  // calls callee with args

  const callee = this;

  ctx.tempFunc = callee;

  const res = ctx.tempFunc(...args);

  delete ctx.tempFunc;

  return res;
};

Function.prototype.myApply = function (ctx, args) {
  const callee = this;
  ctx.tempRef = callee;
  const res = ctx.tempRef(...args);
  delete ctx.tempRef;
  return res;
};

Function.prototype.myBind = function (ctx, ...args) {
  const callee = this; // check if this fn
  // check if ctx is object

  ctx.tempRef = callee;
  return function (...args2) {
    const res = ctx.tempRef(...args, ...args2);
    delete ctx.tempRef;
    return res;
  };
};
