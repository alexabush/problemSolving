function findNumber(start, stop, string) {
  let newStr = '';
  let freqCounter = {};

  for (let i = start; i <= stop; i++) {
    newStr += i;
  }

  for (let i = 0; i < newStr; i++) {
    if (freqCounter.hasOwnProperty(i)) {
      freqCounter[i]++;
    } else {
      freqCounter[i] = 1;
    }
  }

  for (let i = 0; i < newStr; i++) {
    if (freqCounter.hasOwnProperty(i)) {
      freqCounter[i]--;
    }
  }
}
