# Automorphic Number

## Background

a number is called _automorphic_ if its square ends in the same digits as the number itself

### Example

25 is an automorphic number because the square root of 25 is 5, which is the ending digit of 25.

## What is the problem?

Make a function that will return a boolean determining if the input number is automorphic

## Brainstorm

This problem will have multiple parts:

1. We will need to square the number and store the square in a variable
2. we then need isolate the last digits of the starting number (we should get as many digits as the square root has)
3. we then compare the isolated last digits with the square root and return the result

## Psudocode

1. Get square root of input number
2. Get last digits of input number. We can do this by converting both the input number and the square root into strings and then slicing (input number string.length - square root.length).
3. We then compare if the slice === the square root and return

_Note: I MAY have an off-by-one error for the slice portion of the problem_

_CORRECTION: I misread the problem the first time through. We want the square of the input, NOT the square root._

We need to change the strategy slightly to accommodate.

1. Get square of input number
2. Get last digits of square. We can do this by converting both the input number and the square into strings and then slicing (squareStr.length - input number.length).
3. We then compare if the slice === the square and return

This solution works, though I had to make a few small modifications after getting my solutions rejected from codewars.

## Codewars Answers Notes

1. there is a String(str1).endsWith(str2) method, which returns a boolean if a string (str1) ends with the characters of a specified string (str2).

[String.prototype.endsWith() mdn link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)

2. There are several solutions that use a similar strategy as I did but do it more efficiently.
