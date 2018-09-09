# Pretty Print

## What is the problem?

we want to print out numbers in the format of a 2d matrix

when the printing is done, we should get a concentric square pattern with n layers

## Brainstorm

i'll probably want to build up the array first before I print it

I could try and just print directly, but I'm not sure how 'thick' the square will be.

actually, i may be able to calculate square width mathmatically:

array width = 1 + 2n
so I'd print n for the first row 1 + 2n times,
then n + (n - m (1 + 2n - 2 \* m times))

and so on until i get to 1.
then I work my way back up.

let's try it!

I could even do this recursively.

that might be better.

print the whole first and last row, and then recurse for the middle section

so i do want my for loops to start from 0 and go up until arrWidth

so my array width formula is wrong
