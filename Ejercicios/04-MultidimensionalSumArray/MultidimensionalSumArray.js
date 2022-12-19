function mdArraySum(arr) {
  // Your code here:
  return arr.reduce(
    (ac, el) => (Array.isArray(el) ? ac + mdArraySum(el) : ac + el),
    0
  );
}

console.log(mdArraySum([1, 2, 3, 4])); // (10)
console.log(mdArraySum([[2, 4], [1], [4, 2, 1]])); // (14)
console.log(mdArraySum([2, [3, 4], 5, [-3, [6, [4, 5]]]])); // (26)

module.exports = mdArraySum;
