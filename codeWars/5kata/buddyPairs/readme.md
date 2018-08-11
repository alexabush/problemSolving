# Buddy Pairs

## Background Knowledge

a divisor is a number that another number can be divided by to create a whole number
a 'proper' divisor excludes the number itself

s(n) is the sum of all the divisors of n

'buddy' is a list of two positive integers where the sum of the divisors of each one number equals the other number + 1, and vice versa.

# What's the problem?

we will be given two positive integers: start and limit

the function buddy(start, limit)
should find the first 'buddy' pair where the first number of the list is
between the start and the limit numbers (inclusive)

the second number in the list must be greater than the first number

if we can't find a pair, we should return the string 'Nothing'

**Example:**
`buddy(10, 50) returns [48, 75]`

## Brainstorm

we'll probably want to iterate up from start to the limit and then test for each number
for each number we can calculate all its divisors, add them up, subtract one, and then run the same process on the new number and see if it takes us back to the original.

if it does, we'll add both numbers to a list and return
if not, we'll return 'nothing'

This pretty inefficient, but it should work

## Psuedocode

1. create a for loop that will take us from the start to the limit (inclusive)
2. write a function 'sumDivisors' that will find all the divisors of an input and then return their sum. We can do this by:
3. creating a list
4. creating another for loop from 1 to num/2 rounded down
5. for each number, check if inputNum % num === 0. if so, add the num to the list
6. once the iteration is over, return the sum of the list (sum via reduce)

7. for each number, run sumDivisors, and subtract 1 (store this number in a variable)
8. run sumDivisors again on the returned number
9. if the number matches, return the current number and the calculated new number
10. if we get all the way through and don't return, return 'Nothing'
