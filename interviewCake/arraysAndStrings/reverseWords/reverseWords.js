function reverseWords(letters) {
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

reverseWords(message);

console.log(message.join(''));
// Prints: 'steal pound cake'
