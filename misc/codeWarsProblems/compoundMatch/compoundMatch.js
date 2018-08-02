function compoundMatch(words, target) {
  const seenWords = new Map();
  for (let i = 0; i < words.length; i++) {
    if (!target.includes(words[i])) continue;
    let substring = target.replace(words[i], '');
    if (seenWords.has(substring)) {
      return target.indexOf(substring) === 0
        ? [substring, words[i], [seenWords.get(substring), i]]
        : [substring, words[i], [i, seenWords.get(substring)]];
    }
    seenWords.set(words[i], i);
  }
  return null;
}

console.log(
  compoundMatch(
    ['super', 'bow', 'bowl', 'tar', 'get', 'book', 'let'],
    'superbowl'
  )
); //  => ['super', 'bowl', [0, 2]]
console.log(
  compoundMatch(
    ['bow', 'crystal', 'organic', 'ally', 'rain', 'line'],
    'crystalline'
  )
); //  => ['crystal', 'line', [1, 5]]
console.log(
  compoundMatch(
    ['bow', 'crystal', 'organic', 'ally', 'rain', 'line'],
    'rainbow'
  )
); //  => ['bow', 'rain', [4, 0]]
console.log(
  compoundMatch(
    ['bow', 'crystal', 'organic', 'ally', 'rain', 'line'],
    'organically'
  )
); //  => ['organic', 'ally', [2, 3]]
console.log(
  compoundMatch(['top', 'main', 'tree', 'ally', 'fin', 'line'], 'mainline')
); //  => ['main', 'line', [1, 5]]
console.log(
  compoundMatch(['top', 'main', 'tree', 'ally', 'fin', 'line'], 'treetop')
); //  => ['top', 'tree', [2, 0]]
