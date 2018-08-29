# Add One To Number

## What is the problem?

given a non-negative number represented as an array of digits, add 1 to the number

digits are stored such that the most significant digit is at the head of the list (and the least significant digit is at the end of the list)

**Example**
_input_
`[1,2,3]`
_output_
`[1,2,4]`

## Brainstorm

so this program is easy if the last digit is <9
but if it is 9, then we need to incremement on to the next number

we count traverse backwards through the array

we can do a recursive solution or an iterative solution using a while loop
if the last number is a 9, we replace that with a 0 and add 1 to the second to last number
