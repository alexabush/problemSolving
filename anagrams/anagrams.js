function anagrams(str1, str2) {
  const s1 = alphebetize(str1);
  const s2 = alphebetize(str2);
  const longer = s1 >= s2 ? s1 : s2;
  const shorter = longer === s1 ? s2 : s1;

  let removed = 0;
  const shortObj = createFreqCounter(shorter);
  const longObj = createFreqCounter(longer);

  Object.keys(longObj).forEach(key => {
    if (!shortObj.hasOwnProperty(key)) {
      removed += longObj[key];
    } else if (shortObj[key].length !== longObj[key].length) {
      removed += Math.abs(shortObj[key].length - longObj[key].length);
    }
  });

  Object.keys(shortObj).forEach(key => {
    if (!longObj.hasOwnProperty(key)) {
      removed += shortObj[key];
    } else if (longObj[key].length !== shortObj[key].length) {
      removed += Math.abs(longObj[key].length - shortObj[key].length);
    }
  });

  return removed;

  function createFreqCounter(str) {
    const freqCounter = {};
    for (let index = 0; index < str.length; index++) {
      freqCounter.hasOwnProperty(str[index])
        ? freqCounter[index]++
        : (freqCounter[index] = 1);
    }
    return freqCounter;
  }

  // let slow = 0;
  // let fast = 1;

  // while (slow < fast) {
  //   // if (shorter[fast] in longer[fast]) {
  //   // }
  //   if (shorter[slow] === longer[slow]) {
  //     slow++;
  //     continue;
  //   }
  //   if (!longer.includes(shorter[fast])) {
  //     removed++;
  //     fast++;
  //   }
  //   if (slow >= shorter.length) {
  //     removed += longer.length - slow;
  //   }
  // }

  function alphebetize(str) {
    return str
      .split('')
      .sort()
      .join('');
  }
}

const apple = 'apple';
const pear = 'pear';
const reap = 'reap';
const leap = 'leap';

// console.log(anagrams(pear, pear)); // 0
// console.log(anagrams(pear, reap)); // 0
// console.log(anagrams(apple, leap)); // 1
console.log(anagrams(apple, pear)); // 3
