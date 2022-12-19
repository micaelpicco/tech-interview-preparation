function curry(fn) {
  // Your code here:
  let args = [];
  return function abc(el) {
    args.push(el);
    if (fn.length === args.length) return fn(...args);
    return function (nextArgs) {
      return abc(nextArgs);
    };
  };
}

const calcAllFour = (var1, var2, var3, var4) => {
  return var1 + var2 - var3 * var4;
};

let curriedDoSomething = curry(calcAllFour);

module.exports = curry;
