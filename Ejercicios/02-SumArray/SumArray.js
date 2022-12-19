function SumArray(arr, n) {
  // Your code here:
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr.some((el) => el != arr[i] && el + arr[i] === n)) return true;
  // }
  // return false;
  // arr.sort();

  if (arr.length === 1) return false;
  let aux = arr.shift();

  for (const el of arr) {
    if (aux + el === n) return true;
  }
  if (SumArray(arr, n)) return true;
  return false;

  // let i = 0;
  // let j = arr.length - 1;
  // while (i != j) {
  //   const sum = arr[i] + arr[j];
  //   if (sum === n) return true;
  //   if (sum > n) j--;
  //   else i++;
  // }
  // return false;
}

console.log(SumArray([2, 4, 5, 9], 9));
console.log(SumArray([2, 4, 5, 9], 12));
console.log(SumArray([2, 5, 9], 4));
console.log(SumArray([4, 2, 9, 5], 7));
console.log(SumArray([5, 2, 9, 4], 12));

module.exports = SumArray;
