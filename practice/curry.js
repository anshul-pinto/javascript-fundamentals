// generic curry function that can convert any func that takes multiple
// args in to a curried version
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) return func.apply(this, args);
    return curried.bind(this, ...args);
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying

// write a function for sum(1)(2)(3)(4)...()

console.log("---------- Cool Sum ------------");

function coolSum(a) {
  return function innerCoolSum(b) {
    if (b === undefined) return a;
    return coolSum(a + b);
  };
}

console.log(coolSum(1)(2)(3)()); // 6
console.log(coolSum(1)(2)(3)(0)(4)()); // 10
console.log(coolSum(1)(2)(3)(10)(-10)()); // 6

// write a function that works for sum(1,2,3)(4)(5,6)()
console.log("---------- Cool Sum with infinite params------------");

const sumOfArray = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};

function coolSumInf(...args1) {
  const a = sumOfArray(args1);
  return function innerCoolSumIf(...args2) {
    if (!args2.length) return a;
    const b = sumOfArray(args2);
    return coolSumInf(a + b);
  };
}

console.log(coolSumInf(1, 1)(2)(3)()); // 6
console.log(coolSumInf(1, 2, 3, 4, 5)(2)(3, 4, 5)(0)(4)()); // 10
console.log(coolSumInf(1)(2)(3)(10)(-10)()); // 6
