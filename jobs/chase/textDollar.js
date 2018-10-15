function numToEnglish(num) {
  let words = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety',
    100: 'Hundred',
    1000: 'Thousand',
    1000000: 'Million'
  };

  let place = {
    1: 'One',
    2: 'Ten',
    3: 'Hundred',
    4: 'Thousand',
    5: 'TenThousand',
    6: 'HundredThousand',
    7: 'Million',
    8: 'TenMillion',
    9: 'HundredMillion'
  };

  let string = num.toString();
  let numDigit = string.length;
  let result = '';
  for (let i = 0; i < string.length; i++) {
    debugger;
    if (+string[i] > 0 && (numDigit === 5 || numDigit === 8)) {
      result += place[numDigit.toString()];
    } else if (+string[i] > 0 && numDigit === 2) {
      result += `${words[(string[i] * 10).toString()]}`;
    } else if (+string[i] > 0 && numDigit === 1) {
      result += `${words[string[i].toString()]}`;
    } else if (+string[i] > 0) {
      result += `${words[string[i].toString()]}${place[numDigit.toString()]}`;
    }
    numDigit--;
  }
  return result;
}
