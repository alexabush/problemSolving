/*
https://www.codewars.com/kata/59ae589c07157afba80000a7/train/javascript
*/

//make new version of 'reverse' array method in less than 28 characters

//long version
function weirdReverse(a) {
  return a.reduce((acc, next) => {
    acc.unshift(next);
    return acc;
  }, []);
}

//shortened
const reverse = a =>
  a.reduce((r, n) => {
    r.unshift(n);
    return r;
  }, []);

weirdReverse = a =>
  a.reduce((r, n) => {
    r.unshift(n);
    return r;
  }, []);

//sample solution

answerReverse = a => a.sort(reducer);

function reducer(x) {
  return x => 1;
}

working = a => a.sort(x => 1);

const letters = ['a', 'b', 'c', 'd'];
console.log(answerReverse(letters));
