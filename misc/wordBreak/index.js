const vocab = [
  'i',
  'a',
  'ten',
  'oodles',
  'ford',
  'inner',
  'to',
  'night',
  'ate',
  'noodles',
  'for',
  'dinner',
  'tonight'
];

function wordBreak(phrase, vocab) {
  const phraseWords = new Set();
  let letters = '';
  for (let i = 0; i < phrase.length; i++) {
    if (vocab.some(word => word.includes(letters))) {
      letters += phrase[i];
    } else {
      phraseWords.add(letters);
      letters = '';
    }
    if (vocab.includes(letters)) {
    } else {
    }
  }
}
