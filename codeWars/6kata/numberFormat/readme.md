#Number Format

##What's expected:
Take input of a number
Return string version of number with ',' inserted where appropriate (every third digit)

Brainstorm:
I need to convert the number into a string
i can then iterate backwards over the string
i'll create a new string and a counter

each iteration, i'll increment the counter and add the current digit to the new string.

if the counter equals 3, i'll add a comma before adding the digit

Strategy:

1.  convert the number into string
2.  create new string, counter
3.  iterate backwards over the string
4.  each iteration:
5.  if the counter equals 3, add a comma, ,add current digit to new string, set counter to 0
6.  else add the current digit to the new string, increment counter

Debugging:

I'm getting wrong output.
It's so wrong I'm not really sure what's going on, so I'm going to set a debugger.

Problem is that when I add to the string, I'm adding to the end, not the beginning. So I end up reversing the returned number.

Trying a fix where I prepend the digit and comma to the newStr instead of prepend it.

Okay so the order is correct now, but I'm still cutting off the last digit so I'm going to keep debugging.

partially fixed bug by letting loop run when i equals 0.

but now I'm not adding the last neccesary ','

Solved bug by resetting counter to 1 instead of 0 on the reset iteration (since i'm adding a digit in front of the new comma, it makes sense that I should reset the counter to 1)

I believe I have a fully working solution, time to submit to codewars.

I'm getting getting errors for negative numbers and I'm going to take a short break because I'm feeling frustrated with the problem.

I'm back.

I need to add logic to not treat a negative sign like a digit

Brainstorm:

First idea:

1.  add an 'isNegative' flag at the very beginning (before we convert to string), set to true or false if number > 0
2.  use Math.abs to make sure number is positive, convert to string, keep the rest of the code the same
3.  Before returning the answer, if isNegative is true, add '-' to the beginning of newStr.

This should work! Let's try it out.

It works!

Runtime Considerations:

Time Complexity: linear, where n is the number of digits in the number

Space Complexity: n, where n is the number of digits in the number (we need to convert a newStr which will be the same length as the initial number)
