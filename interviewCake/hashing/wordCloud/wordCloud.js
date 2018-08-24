function wordCloud(input) {
  let words = new Map();
  input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  const wordsArr = input.split(' ');
  for (let word of wordsArr) {
    word = word.toLowerCase();
    if (words.has(word)) {
      words.set(word, words.get(word) + 1);
    } else {
      words.set(word, 1);
    }
  }
  return words;
}

const string =
  'After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.';

console.log(wordCloud(string));
