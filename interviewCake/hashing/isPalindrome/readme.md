# Is Palindrome

## What is the problem?

write a function that checks if we can make a palidrome out of and input string.

note that we can rearrange the letters in the input string any way we want

## Brainstorm

we'll want to use a frequency counter
we'll assume that the new string doesn't half to be a real word, otherwise the problem gets much harder

we should probably aim to do this in linear time to start

we'll create our frequency counter, and then iterate over the string, counting how many time each letter appears

then we'll check if all the number of occurences are even (ONE letter can have an odd number of occurences, but no more)
