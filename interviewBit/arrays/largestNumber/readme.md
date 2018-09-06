# Largest Number

## What is the problem?

given a list of non-negative integers, arrange then so that they form the largest number

## Brainstorm

we'll want to reverse sort the array
then we'll want to combine the numbers into a string.

this will pass some of the tests, but it will likely have flaws

next we need to find a way to swap numbers if the have the same first digit but a lower second digit.

if second digit is lower than common digit, don't swap

i want to count each little streak, and then I want to sort the ints within that streak so that the largest numbers are to the left

i'll count the streak by setting start and end pointers

now I need to figure out my swapping criteria

I want to order the subarray so that the highest second digits are first

IF the second digit is less than than the first digit, the single digit number goes first

else if the second digit is more than the first digit, the 2 digit number goes first

_example_: 3 goes before 32 but after 34
