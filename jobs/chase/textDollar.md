we get a positive integer number

we need to convert this number into English

we should log the converted 'number'.

the english number should be in camel case, we should support english up to (not including) 1 billion

## Brainstorm

so we need to build an object with words that map to the numbers

we'll then reverse iterate through the number and start building up a string.

we'll always end with 'Dollars' except for in the special case of 1 Dollar
