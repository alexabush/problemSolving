function wordCloudMySolution(input) {
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

function WordCloudData(inputString) {

  this.wordsToCounts = new Map();
  this.populateWordsToCounts(inputString);
}

WordCloudData.prototype.populateWordsToCounts = function (inputString) {
  // iterates over each character in the input string, splitting
  // words and passing them to this.addWordToMap()

  var currentWordStartIndex = 0;
  var currentWordLength = 0;

  for (var i = 0; i < inputString.length; i++) {
    var character = inputString.charAt(i);

    // if we reached the end of the string we check if the last
    // character is a letter and add the last word to our map
    if (i === inputString.length - 1) {
      if (this.isLetter(character)) {
        currentWordLength += 1;
      }
      if (currentWordLength > 0) {
        var word = inputString.slice(currentWordStartIndex,
          currentWordStartIndex + currentWordLength);
        this.addWordToMap(word);
      }

      // if we reach a space or emdash we know we're at the end of a word
      // so we add it to our map and reset our current word
    } else if (character === ' ' || character === '\u2014') {
      if (currentWordLength > 0) {
        var word = inputString.slice(currentWordStartIndex,
          currentWordStartIndex + currentWordLength);
        this.addWordToMap(word);
        currentWordLength = 0;
      }
      // we want to make sure we split on ellipses so if we get two periods in
      // a row we add the current word to our map and reset our current word
    } else if (character === '.') {
      if (i < inputString.length - 1 && inputString.charAt(i + 1) === '.') {
        if (currentWordLength > 0) {
          var word = inputString.slice(currentWordStartIndex,
            currentWordStartIndex + currentWordLength);
          this.addWordToMap(word);
          currentWordLength = 0;
        }
      }

      // if the character is a letter or an apostrophe, we add it to our current word
    } else if (this.isLetter(character) || character === '\'') {
      if (currentWordLength === 0) {
        currentWordStartIndex = i;
      }
      currentWordLength += 1;

      // if the character is a hyphen, we want to check if it's surrounded by letters
      // if it is, we add it to our current word
    } else if (character === '-') {
      if (i > 0 && this.isLetter(inputString.charAt(i - 1)) &&
        this.isLetter(inputString.charAt(i + 1))) {
        if (currentWordLength === 0) {
          currentWordStartIndex = i;
        }
        currentWordLength += 1;
      } else {
        if (currentWordLength > 0) {
          var word = inputString.slice(currentWordStartIndex,
            currentWordStartIndex + currentWordLength);
          this.addWordToMap(word);
          currentWordLength = 0;
        }
      }
    }
  }
};

WordCloudData.prototype.addWordToMap = function (word) {

  var newCount;

  // if the word is already in the map we increment its count
  if (this.wordsToCounts.has(word)) {
    newCount = this.wordsToCounts.get(word) + 1;
    this.wordsToCounts.set(word, newCount);

    // if a lowercase version is in the map, we know our input word must be uppercase
    // but we only include uppercase words if they're always uppercase
    // so we just increment the lowercase version's count
  } else if (this.wordsToCounts.has(word.toLowerCase())) {
    newCount = this.wordsToCounts.get(word.toLowerCase()) + 1;
    this.wordsToCounts.set(word.toLowerCase(), newCount);

    // if an uppercase version is in the map, we know our input word must be lowercase.
    // since we only include uppercase words if they're always uppercase, we add the
    // lowercase version and give it the uppercase version's count
  } else if (this.wordsToCounts.has(this.capitalize(word))) {
    newCount = this.wordsToCounts.get(this.capitalize(word)) + 1;
    this.wordsToCounts.set(word, newCount);
    this.wordsToCounts.delete(this.capitalize(word));

    // otherwise, the word is not in the map at all, lowercase or uppercase
    // so we add it to the map
  } else {
    this.wordsToCounts.set(word, 1);
  }
};

WordCloudData.prototype.capitalize = function (word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

WordCloudData.prototype.isLetter = function (character) {
  return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character) >= 0;
};

const string =
  'After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.';

console.log(wordCloud(string));
