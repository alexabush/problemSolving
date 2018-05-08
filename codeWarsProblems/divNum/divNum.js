// https://www.codewars.com/kata/find-number-with-maximum-number-of-divisors/train/javascript

// n^2 solution
function divNum(num1, num2) {
  const freq = {};
  for (let i = num1; i <= num2; i++) {
    for (let j = 1; j < Math.ceil(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        freq.hasOwnProperty(i) ? freq[i]++ : (freq[i] = 1);
      }
    }
  }
  const keys = Object.keys(freq);
  if (keys.length < 1) return 0;
  return +keys.reduce((maxKey, nextKey) => {
    if (freq[nextKey] > freq[maxKey]) return nextKey;
    return maxKey;
  });
}

//
// function divNum(num1, num2) {
//   const freq = { num: undefined, count: 0 };
//   for (let i = num1; i <= num2; i++) {
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) {

//         freq.hasOwnProperty(i) ? freq[i]++ : (freq[i] = 1);
//       }
//     }
//   }
//   const keys = Object.keys(freq);
//   if (keys.length < 1) return 0;
//   return +keys.reduce((maxKey, nextKey) => {
//     if (freq[nextKey] > freq[maxKey]) return nextKey;
//     return maxKey;
//   });
// }

// debugger;
console.log(divNum(15, 30)); // 24
console.log(divNum(1, 2)); // 2
console.log(divNum(0, 0)); // 0
console.log(divNum(52, 156)); // 120
