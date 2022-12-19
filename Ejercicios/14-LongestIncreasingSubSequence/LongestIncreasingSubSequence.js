function longestIncreasingSubsequence(array, sequences = [], longest = 0) {
  // Your code here:

  for (const num of array) {
    sequences.push([num]);
    for (const seq of sequences) {
      if (num > seq[seq.length - 1]) {
        let newSequence = seq.concat(num);
        console.log(newSequence);
        longest < newSequence.length ? (longest = newSequence.length) : null;
        sequences.push(newSequence);
      }
      // sequences.push([num, ...seq])
    }
  }
  console.log(sequences);
  console.log(sequences.length);
  // sequences.map((el) =>
  //   !longest
  //     ? (longest = el.length)
  //     : longest < el.length
  //     ? (longest = el.length)
  //     : null
  // );
  return longest;
}
// console.log(longestIncreasingSubsequence([1, 2, 3, 4]));
console.log(longestIncreasingSubsequence([3, 10, 4, 5])); //(3)
// console.log(longestIncreasingSubsequence([3, 4, 2, 1, 10, 6])); //(3)
// console.log(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80])); //(6)
// console.log(
//   longestIncreasingSubsequence([
//     10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28,
//   ])
// ); //(9)

/*

[
  [3],
  [10],
  [3, 10],
  [4],
  [3, 4],
  [5],
  [3, 5],
  [4, 5],
  [3, 4, 5]
]

[
  [3],
  [4],
  [3, 4],
  [2],
  [1],
  [10],
  [3, 10],
  [4, 10],
  [3, 4, 10],
  [2, 10],
  [1, 10],
  [6],
  [3, 6],
  [4, 6],
  [3, 4, 6],
  [2, 6],
  [1, 6],
]


*/


module.exports = longestIncreasingSubsequence;
