function FindNeedle(haystack, needle) {
  // Your code here:
  //
  // for (let i = 0; i < haystack.length - needle.length + 1; i++) {
  //   console.log(haystack[i]);

  //   for (let j = 0; j < needle.length; j++) {
  //     console.log(needle[j]);

  //     if (haystack[i + j] === needle[j]) {
  //     } else break;
  //     if (j === needle.length - 1) return i;
  //   }
  // }
  // return -1;
  //O(n*m)
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    const sliced = haystack.slice(i, i + needle.length);
    if (needle === sliced) return i;
  }
  return -1;
  //O(n)
}

console.log(FindNeedle('react-redux', 'redux'));

module.exports = FindNeedle;
