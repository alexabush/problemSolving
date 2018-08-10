# Quidditich Scoreboard

## Understanding the Problem

quaffle throw 10 points
foul: - 30 points

There are a bunch of different words that qualify as fouls

snitch caught: 150 points
AND game immediately ends

We'll get two strings.

1.  The first string will tell us the teams that are playing
2.  The second string will be a series of match events (in string, each event is separated by a comma)

**Our goal is to return a string containing the final score for each team.**

Example output `"Ilkley: 10, Yorkshire: 120"`

## Brainstorming:

1.  First, i'll need to process the input data. I'll want to turn the string into a list. I can do this by spliting on commas using split(',').

2.  I'll extract the team names from the first item of this list using .split(' vs ') and store these values as keys in an object with a value set to 0

3.  I'll iterate over the list (starting from the second item) and add/subtract from the object. I'll add/subtract from the number corresponding with whatever team is listed in the item. I'll have to process each item further using split(': ').

4.  I'll need to build a lookup table that lists all the possible actions and the points associated with those values

5.  Once I've iterated over the full list, I'll need to build a string from the object.

6.  Return the string!

## Psudocode (just formalizing brainstorming part a bit)

1.  Create store object for team names/points
2.  Create lookup table for possible values
3.  Split the first string on ' vs ' and store the team names in the store object. Set the value of each team name to 0
4.  Split the second string on ', '
5.  Iterate over the list. For each item, split on ': '. Lookup the value of the second part in the lookup table and add/subtract the number we get back from the team in the store object
6.  Set conditional logic so that if we come across the snitch, break from the loop (we'll already have added the points by time we get to this code)
7.  Process the store object into a string, return the string
