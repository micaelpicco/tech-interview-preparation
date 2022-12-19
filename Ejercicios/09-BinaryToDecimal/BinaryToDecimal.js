function BinaryToDecimal(binary) {
  // Your code here:
  binary = binary
    .split('')
    .reverse()
    .reduce((acc, el, index) => acc + 2 ** index * el, 0);

  return binary;
  //return parseInt(binary, 2);
}
//
console.log(BinaryToDecimal('10'));
console.log(BinaryToDecimal('111'));
console.log(BinaryToDecimal('101101110001'));
//
module.exports = BinaryToDecimal;
