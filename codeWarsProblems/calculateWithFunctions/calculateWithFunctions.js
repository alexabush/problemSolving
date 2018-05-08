function zero(operand) {
  if (operand) {
    return operand(0);
  }
  return 0;
}
function one(operand) {
  if (operand) {
    return operand(1);
  }
  return 1;
}
function two(operand) {
  if (operand) {
    return operand(2);
  }
  return 2;
}
function three(operand) {
  if (operand) {
    return operand(3);
  }
  return 3;
}
function four(operand) {
  if (operand) {
    return operand(4);
  }
  return 4;
}
function five(operand) {
  if (operand) {
    return operand(5);
  }
  return 5;
}
function six(operand) {
  if (operand) {
    return operand(6);
  }
  return 6;
}
function seven(operand) {
  if (operand) {
    return operand(7);
  }
  return 7;
}
function eight(operand) {
  if (operand) {
    return operand(8);
  }
  return 8;
}
function nine(operand) {
  if (operand) {
    return operand(9);
  }
  return 9;
}

function plus(a) {
  return function(b) {
    return a + b;
  };
}
function minus(a) {
  return function(b) {
    return b - a;
  };
}
function times(a) {
  return function(b) {
    return a * b;
  };
}
function dividedBy(a) {
  return function(b) {
    return b / a;
  };
}

// console.log(three(plus(four()))); // 7
// console.log(three(minus(four()))); // 1
// console.log(three(times(four()))); // 12
// console.log(three(dividedBy(four()))); // 1.3
// console.log(seven(times(five()))); // must return 35
// console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
