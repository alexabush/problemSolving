//my solution, passes 90% of test but I can't see which tests fail
function memesorting(str) {
  let lookup = new Map();
  lookup.set(['b', 'u', 'g'], 'Roma');
  lookup.set(['b', 'o', 'o', 'm'], 'Maxim');
  lookup.set(['e', 'd', 'i', 't', 's'], 'Danik');

  for (let letter of str) {
    for (let [key, value] of lookup.entries()) {
      if (key[0] === letter.toLowerCase()) {
        lookup.set(key.slice(1), value);
      }
      if (key.length === 0) {
        return value;
      }
    }
  }
  return 'Vlad';
}

console.log(memesorting('This is programmer meme ecause it has bug'));
