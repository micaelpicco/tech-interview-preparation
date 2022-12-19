function spyOn(fn) {
  // Your code here:
  let callCount = 0;
  const calledWith = [];
  const results = [];

  const spy = (...args) => {
    callCount += 1;
    args.forEach((el) => calledWith.push(el));
    console.log(calledWith);
    const res = fn(...args);
    results.push(res);
    return res;
  };
  spy.getCallCount = () => {
    return callCount;
  };
  spy.wasCalledWith = (value) => calledWith.includes(value);
  spy.returned = (value) => results.includes(value);
  return spy;
}

const adder = (n1, n2) => {
  return n1 + n2;
};

const adderSpy = spyOn(adder);

console.log(adderSpy.getCallCount()); // 0

console.log(adderSpy(2, 4)); // returns 6
console.log(adderSpy.getCallCount()); // 1
var x = 'tuviejaentanga';
console.log(adderSpy(3, 5)); // returns 8
console.log(adderSpy.getCallCount()); // 2
console.log(adderSpy.wasCalledWith(2)); // true
console.log(adderSpy.wasCalledWith(0)); // false
console.log(adderSpy.returned(6)); // true
console.log(adderSpy.returned(9)); // false
console.log(global);
module.exports = spyOn;
