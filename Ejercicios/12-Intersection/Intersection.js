function intersection(arr1, arr2) {
  // Your code here:
  return arr1.filter((el1) => arr2.some((el2) => el1 === el2));
}

console.log(intersection([1, 3, 5, 7, 10], [2, 3, 6, 8, 10, 20]));

module.exports = intersection;
