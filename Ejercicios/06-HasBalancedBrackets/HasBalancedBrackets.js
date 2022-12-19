function HasBalancedBrackets(string) {
  // Your code here:
  if (string.length % 2) return false;

  const openBrackets = [];
  const validBrackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < string.length; i++) {
    const bracket = string[i];
    // console.log(bracket);
    if (validBrackets[bracket]) openBrackets.push(bracket);
    else {
      lastOpen = openBrackets[openBrackets.length - 1];
      if (validBrackets[lastOpen] === bracket) openBrackets.pop();
      else return false;
    }
  }

  return openBrackets.length ? false : true;

  // const validOpeningBrackets = ['(', '[', '{']; //1
  // const validClosingBrackets = [')', ']', '}'];
  // for (let i = 0; i < string.length; i++) {
  //   const bracket = string[i];
  //   // console.log(bracket);
  //   if (validOpeningBrackets.includes(bracket)) {
  //     // console.log(bracket);
  //     openBrackets.push(bracket);
  //     // console.log(openBrackets);
  //   }
  //   if (validClosingBrackets.includes(bracket)) {
  //     const lastOpen = openBrackets[openBrackets.length - 1];
  //     const index = validClosingBrackets.indexOf(bracket);
  //     const brother = validOpeningBrackets[index];
  //     // console.log(brother);
  //     if (lastOpen === brother) openBrackets.pop();
  //     else return false;
  //   }
  // }
  // return openBrackets.length ? false : true;
  // O(n)
}

console.log(HasBalancedBrackets('{[]()}'));
console.log(HasBalancedBrackets('{[(])}'));
console.log(HasBalancedBrackets('{[('));
console.log(HasBalancedBrackets('{[([{()[]{}}])]}'));
console.log(HasBalancedBrackets('{[]}}'));

module.exports = HasBalancedBrackets;
