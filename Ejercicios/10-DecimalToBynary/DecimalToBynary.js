function DecimalToBynary(num) {
  // Your code here:

  return num.toString(2)
  
  // let arr = [];
  // while (num >= 1) {
  //   arr.push(num % 2);
  //   num = Math.floor(num / 2);
  // }
  // return arr.reverse().join('');
}
//
console.log(DecimalToBynary(4));
console.log(DecimalToBynary(7));
//
module.exports = DecimalToBynary;
