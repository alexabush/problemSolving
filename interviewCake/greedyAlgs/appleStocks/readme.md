# Apple Stocks

Interview Cake [Apple Stocks Problem](https://www.interviewcake.com/question/javascript/stock-price?section=greedy&course=fc1)

## What is the problem asking for?

we want to know how much money we COULD have made trading apple stocks yesterday

## What do we have?

we have an array of stock prices throughout the day

the indexes of the array correlate to the time in minutes past openning time (9:30am)

the values at each index are the price ($) of a share at that time

## What do we need to do to solve the problem?

we need to write a function that will take the stockPrice array and return the highest profit that could have been made from ONE purchase and ONE sale.

**Notes**:

1. we need to buy the stock before we sell

## Brainstorm

I've seen something similar to this program before?

We need to iterate over the array
we'll need to create a 'greatestProfit' variable and then update that variable as new profits profits becomes possible

we'll need a way of recording the cheapest stock as well

I get the feeling like i'm missing something, but I'm not sure what it is

I'm going to write out the actual code and see if there's a problems

## Psudocode

1. create 'maxProfit' variable, set it to 0
2. create 'lowestPrice' variable, set to first element
3. create loop to iterate over array starting from index 1 (second price)
4. make conditional logic, if the currentPrice is less than the low, replace to low with the currentPrice
5. else if currentPrice is higher than the low, subtract low from high and compare that to the current 'maxProfit' value. If there that value is greater than 'maxProfit', replace maxProfit with that value.
6. Once we get to the end of our iteration, return whatever the 'maxProfit' is

## Increasing the difficulty of the problem

Good news, the code works!

But I got more information about the problem.
We now want to return a NEGATIVE profit if the price goes down all day.

Our current code will return 0 (since there's no way to make a profit), but we now want our code to return the SMALLEST LOST we could take if the price goes down all day.

## Brainstorm

we'll still need to iterate over the values
what we're looking for is the smallest difference between values

the highest and the second highest number
we want to find the smallest loss

so we want to find the smallest distance between numbers left to right

we should add a variable for 'smallest loss'
and a variable for 'highest price'

then we can replace highest price as we iterate through the array

we can update smallest loss as we iterate through the array
