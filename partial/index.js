var partialAdd = partial(add);
var partialAddALot = partial(addAlot);
var partialSub = partial(subtractAlot);

// console.log('partialAdd', partialAdd);
// console.log('partialAddALot', partialAddALot);
// console.log('partialSub', partialSub);

// console.log(partialAdd(1)()()()(2, 3)); // 6
console.log(partialAdd(1)(2)()(3, 4)); // 6
console.log(partialAddALot()(1, 2)(3, 4)(5, 6)()()()()(6)()()(10, 11, 12));
// 37
console.log(partialSub(1, 2, 3)(4, 5, 6)); // -13

function partial(func) {
  const numArgs = func.length;
  const args = [];
  return function innerFunc(...newArgs) {
    if (newArgs) args.push(...newArgs);
    if (args.length >= numArgs) {
      const neededArgs = args.slice(0, numArgs);
      return func(...neededArgs);
    } else return innerFunc;
  };
}

function add(a, b, c) {
  return a + b + c;
}

function addAlot(a, b, c, d, e, f, g, h) {
  return a + b + c + d + e + f + g + h;
}

function subtractAlot(a, b, c, d, e) {
  return a - b - c - d - e;
}
