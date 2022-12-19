function MaxValue(shares) {
  // Your code here:
  let maxProfit = -Infinity;
  let minValue = shares[0];
  for (let i = 0; i < shares.length; i++) {
    const profit = shares[i] - minValue;
    if (profit > maxProfit) maxProfit = profit;
    if (shares[i] < minValue) minValue = shares[i];
  }
  return maxProfit;
  //
  // let aux = 0;
  // for (let i = 0; i < shares.length; i++) {
  //   for (let j = i + 1; j < shares.length; j++) {
  //     aux = shares[j] - shares[i] > aux ? shares[j] - shares[i] : aux;
  //   }
  // }
  // return aux;
  // O (n**2)
}

console.log(MaxValue([4, 3, 2, 5, 11]));
console.log(MaxValue([23, 7, 3, 4, 8, 6]));

module.exports = MaxValue;
