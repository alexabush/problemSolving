# Find the missing number

Codewars problem [here](https://www.codewars.com/kata/find-the-missed-number/train/javascript)

## Understanding the Problem:

We will be given a string containing numbers from a to b

one of the numbers will be removed, then the string will be shuffled

we need to find all the numbers the 'missing number' could possibly be

Rephrase, we'll be PROVIDED with a of shuffled characters. We'll also be told what the first number of the string was, and what the last number in the string was.

We'll know that the rest of the numbers are in the sequence start-stop

## Brainstorm

My initial thought is to create a second string with all the numbers from start to stop, and then diff it with the string we're provided

We'll get the digits that are different. Then we return an array all of the possible numbers that could be made from those digits.

Is this a sound strategy?

We should have all the same digits except for the missing ones.

## Psudocode Steps:

1.  Create a new string from the start and stop values. I'd honestly would probably just look up how to do this if I was working.

I can use a simple for loop and count up to 22 (<=21) and populate an array.

Note: there's probably a more graceful es6 way to do it, but I'll just use a vanilla for-loop.

2.  Diff. There are probably multiple ways to do this. Again, I'd probably just google ways to diff two strings.

I guess I'll do it with a frequency counter
although I vaguely remember a bunch of easier ways to do it.

I remember a method that involves building up a frequency counter using the longer string and then tearing down the same frequency counter using the shorter string.

What remains will be the diff.

Cool, so let's use that method.

3.  Once I have the diff, I'll need to find all the numbers that can be created using those digits.

(I'd probably google this too!)

I'm not quite sure how to do this, so i'm going to throw out some sample ideas:

1.  Nested for loop
2.  Two pointer while loop

I'm going to google it. The answers i've found are fairly non-trivial (for me), so I'm going to admit defeat on this one.

4.  I'd just return the array of all the possible combinations.
