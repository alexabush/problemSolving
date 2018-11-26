/*
  assume standard input has been processed and data is being entered as the JS Number data type
*/

function textDollar(num) {
  /*
  Current code passes provided tests work to handle:
  1) Larger numbers
  2) Teens
  
  Most of the code is written, but the conditionals need to be fine-tuned.

  Note that there are likely many Regex solution, I chose to ignore that option.
  */
  let word = '';
  let numStr = num.toString();
  let magnitude = numStr.length;
  for (let i = 0; i < numStr.length; i++) {
    let digit = +numStr[i];
    if (digit === 0) continue;
    if (magnitude === 5 || magnitude === 7) {
      word += doubleDigits(digit);
      word += largeNumbers(Math.pow(10, magnitude - 2));
      i++;
      magnitude--;
    } else if (magnitude > 2) {
      word += singleDigit(digit);
      word += largeNumbers(Math.pow(10, magnitude - 1));
    } else if (magnitude === 2 && digit === 1) {
      word += teens(+numStr.slice(numStr.length - magnitude));
      break;
    } else if (magnitude === 2) {
      word += doubleDigits(digit);
    } else if (magnitude === 1) {
      word += singleDigit(digit);
    }
    magnitude--;
  }
  word += 'Dollars';
  return word;

  function singleDigit(n) {
    if (n === 1) return 'One';
    else if (n === 2) return 'Two';
    else if (n === 3) return 'Three';
    else if (n === 4) return 'Four';
    else if (n === 5) return 'Five';
    else if (n === 6) return 'Six';
    else if (n === 7) return 'Seven';
    else if (n === 8) return 'Eight';
    else if (n === 9) return 'Nine';
  }
  function teens(n) {
    if (n === 10) return 'Ten';
    else if (n === 11) return 'Eleven';
    else if (n === 12) return 'Twelve';
    else if (n === 13) return 'Thirteen';
    else if (n === 14) return 'Fourteen';
    else if (n === 15) return 'Fifteen';
    else if (n === 16) return 'Sixteen';
    else if (n === 17) return 'Seventeen';
    else if (n === 18) return 'Eighteen';
    else if (n === 19) return 'Nineteen';
  }

  function doubleDigits(n) {
    if (n === 1) return 'Ten';
    if (n === 2) return 'Twenty';
    else if (n === 3) return 'Thirty';
    else if (n === 4) return 'Forty';
    else if (n === 5) return 'Fifty';
    else if (n === 6) return 'Sixty';
    else if (n === 7) return 'Seventy';
    else if (n === 8) return 'Eighty';
    else if (n === 9) return 'Ninety';
  }

  function largeNumbers(n) {
    if (n === 100) return 'Hundred';
    else if (n === 1000) return 'Thousand';
    else if (n === 1000000) return 'Million';
  }
}

// Provided Samples
let num1 = 3;
console.log(textDollar(num1));
// Three Dollars

let num2 = 466;
console.log(textDollar(num2));
// FourHundredSixtySixDollars

let num3 = 1234;
console.log(textDollar(num3));
// OneThousandTwoHundredThirtyFourDollars

let num4 = 10;
console.log(textDollar(num4));
// TenDollars

let num5 = 21;
console.log(textDollar(num5));
// TwentyOneDollars

let num6 = 44440;
console.log(textDollar(num6));
