// this won't work because sort mutates the array
function findDuplicate(ints) {
  ints.sort((a, b) => a > b);
  let prev = ints[0];
  for (let i = 0; i < ints.length; i++) {
    if (prev === ints[i]) {
      return prev;
    }
    prev = ints[0];
  }
  throw new Error('no duplicate!');
}
