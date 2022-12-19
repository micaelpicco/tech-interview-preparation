function subSetSum(array, n) {
  // Your code here:
  let sumas = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < n) sumas.push(array[i]);
    if (i - 1 >= 0) {
      if (
        sumas.some((el) => {
          const sum = el + array[i];
          if (sum === n) return true;
          if (el != array[i] && sum < n) sumas.push(el + array[i]);
        })
      )
        return true;
    }
  }
  console.log(sumas);
  return false;
}

console.log(subSetSum([1, 10, 5, 3], 9));
// console.log(subSetSum([1, 10, 5, 3], 19));
// console.log(subSetSum([1, 10, 5, 3], 2));
// console.log(subSetSum([1, 10, 5, 3], 10));

module.exports = subSetSum;
