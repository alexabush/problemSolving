function spyOn(func) {
  let counter = 0;
  let wasCalledWith = new Set();
  let returned = new Set();

  decoratedFunc.callCount = function() {
    return counter;
  };

  decoratedFunc.wasCalledWith = function(val) {
    return wasCalledWith.has(val);
  };

  decoratedFunc.returned = function(val) {
    return returned.has(val);
  };

  function decoratedFunc(...args) {
    counter++;
    [...args].map(val => wasCalledWith.add(val));
    let returnVal = func(...args);
    returned.add(returnVal);
    return returnVal;
  }

  return decoratedFunc;
}

function adder(n1, n2) {
  return n1 + n2;
}
var adderSpy = spyOn(adder);

console.log(adderSpy(2, 4)); // returns 6
console.log(adderSpy(3, 5)); // returns 8
// console.log(adderSpy.callCount()); // returns 2
console.log(adderSpy.wasCalledWith(4)); // true
// console.log(adderSpy.wasCalledWith(0)); // false
// console.log(adderSpy.returned(8)); // true
// console.log(adderSpy.returned(0)); // false
