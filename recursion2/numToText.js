function numToText(str) {
  const pairings = [
    ['1', 'one'],
    ['2', 'two'],
    ['3', 'third'],
    ['4', 'four'],
    ['5', 'five'],
    ['6', 'six'],
    ['7', 'seven'],
    ['8', 'eight'],
    ['9', 'nine']
  ];
  const lookup = new Map(pairings);
  let newStrArr = [];
  helper(str.split(' '));

  function helper(strArr) {
    if (strArr.length === 0) return;
    if (lookup.has(strArr[0])) newStrArr.push(lookup.get(strArr[0]));
    else newStrArr.push(strArr[0]);
    return helper(strArr.slice(1));
  }

  return newStrArr.join(' ');
}

console.log(numToText('My 2 favorite numbers are 4 and 1'));
// "My two favorite numbers are four and one"
console.log(numToText('I have 5 dogs and 6 ponies'));
// "I have five dogs and six ponies"
