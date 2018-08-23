//works, but doesn't modify array
function reverseWordsCopy(letters) {
  const joinedLetters = letters.join('');
  const words = joinedLetters.split(' ');
  let low = 0;
  let high = words.length - 1;
  while (low < high) {
    swap(words, low, high);
    low++;
    high--;
  }
  const joinedWords = words.join(' ');
  const splitLetters = joinedWords.split('');
  return splitLetters;
}

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function reverseWords(words) {
  let partition = 0;
  let endOfWordIndex = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === ' ') {
      partition = 0;
    }
    swap(words, partition, i);
    partition++;
    endOfWordIndex++;
  }
  return words;
}

const message = [
  'c',
  'a',
  'k',
  'e',
  ' ',
  'p',
  'o',
  'u',
  'n',
  'd',
  ' ',
  's',
  't',
  'e',
  'a',
  'l'
];

console.log(reverseWords(message.join('')));

console.log(message.join(''));
// Prints: 'steal pound cake'
