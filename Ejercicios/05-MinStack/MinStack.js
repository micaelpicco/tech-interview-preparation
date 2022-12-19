function Node(value) {
  // Your code here:
  this.value = value;
  this.next = null;
  this.min = null;
}

function MinStack() {
  // Your code here:
  this.top = null;
}

MinStack.prototype.push = function (value) {
  const previousTop = this.top;
  this.top = new Node(value);
  this.top.next = previousTop;
  if (!previousTop) this.top.min = value;
  else
    value < this.top.min
      ? (this.top.min = value)
      : (this.top.min = previousTop.min);
};

MinStack.prototype.pop = function () {
  let popped = this.top.value;
  this.top = this.top.next;
  return popped;
};

MinStack.prototype.min = function () {
  return this.top.min;
  //
  // O(n)
  // let current = this.top;
  // let min = this.top.value;
  // while (current.next) {
  //   current = current.next;
  //   min <= current.value ? null : (min = current.value);
  // }
  // return min;
};

MinStack.prototype.peek = function () {
  return this.top.value;
};

const stack = new MinStack();
stack.push(1);
stack.push(6);
stack.push(8);
stack.push(4);
// stack.pop();
console.log(stack.min());
console.log(stack);

module.exports = {
  Node,
  MinStack,
};
