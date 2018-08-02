#Every possible digit

Given a long number, return all the possible sum of two digits of it.

**My rewording**:
Given a number, return an array of all possible sums resulting from adding together 2 digits.

###Initial Strategy
split the number up into an array its digits
create a new array

iterate over the array of digits
for each digit, add it to all other digits, add sum to new array
