function MinStack() {
  this.stack = [];
  this.smallest = [];
  this.length = 0;
}

MinStack.prototype.push = function(val) {
  this.stack.push(val);

  let counter = this.length - 2;
  let currentIndex = this.length - 1;
  while (val > this.stack[counter]) {
    swap(this.stack, counter, currentIndex);
    currentIndex--;
    counter--;
  }
  this.length++;
};

MinStack.prototype.pop = function() {
  this.length--;
  return this.stack.pop();
};

MinStack.prototype.top = function() {
  return this.stack[this.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.stack[this.length - 1];
};

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); //--> Returns -3.
console.log(minStack.pop());
console.log(minStack.top()); //--> Returns 0.
console.log(minStack.getMin()); //--> Returns -2.
