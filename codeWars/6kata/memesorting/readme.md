#Meme Sorting

You will be given a meme (string), and your task is to identify its category, and send it to the right receiver: IT - 'Roma', chemistry - 'Maxim', design - 'Danik', or other - 'Vlad'.

IT meme has letters b, u, g.
Chemistry meme has letters b, o, o, m.
Design meme has letters e, d, i, t, s.
If there is more than 1 possible answer, the earliest match should be chosen.

Note: letters are case-insensetive and should come in the order specified above.

##My Strategy

1.  create a lookup table with the values of the different catagories
2.  iterate over the string
3.  for each letter, check if the letter is contained in one of the lookup table values 4. if yes, remove that letter from the lookup table
4.  check if any of the lookup table arrays are empty, if so, return the value associated with the array in the lookup table

##Other solutions
https://www.codewars.com/kata/memesorting/solutions?show-solutions=1

There are several regex solutions that I'm ignoring.
There's a solution that creates a lookup object for each word and then coun
