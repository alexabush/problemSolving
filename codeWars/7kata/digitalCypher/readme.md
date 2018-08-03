#Digital Cypher

Steps:

1.  Make a lookup table to assign each letter of the alphabet a unique number.
2.  We take in a word and convert it into its corresponding numbers (store numbers in an array).
3.  We add the digits from the key to each of the letter numbers (if array is longer than key, just start again from the beginning of the key)

We can do the conversion in a simple for loop

The adding will take a bit more work.
First we will need to convert the key into an array of numbers.

Then we'll need to iterate over the array of word numbers and add the a digit from the key to each number in the array of word numbers

we can use a simple for loop to iterate over the code array, but we'll need a more complex method to add they keys.

We want to start at the first digit in the keys array, then move to the next one until we get to the end of the array. Then we want to start over from the beginning.

A good solution will be to use a counter variable to track which index of keys we're currently at

once we've used all of the keyDigits, we'll want to reset the value of the counter to 0

https://www.codewars.com/kata/digital-cypher/train/javascript

We have a bug somewhere.
Let's walk through the code and find out where it is.

Why is the key digit not being added to the code num properly?

It could be that the charToNum function isn't functioning properly

Yup, that was the problem. Bug fixed.

Cool, looks like that was the only bug. Problem is now solved!
