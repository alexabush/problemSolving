# Rectangular Love

## What is the problem?

Find the area of overlap between two rectangles
function should find the rectangular intersection

each rectangle is an object

we should output an object of the overlapping area between the two rectangles

## Brainstorming

First of all, I should create a function to return new rectangle objects

I take in the leftX, the bottom Y and the width and height (from which we could calculate the rightX and topY)

my function will want to calculate the full dimension of both passed in rectangle objects and see if they overlap

we want to return the area that both rectangles share

so we need to calculate the area of both rectangles

we need to look at the x axis area of leftX to leftX + width

The way I'm doing it seems long and convoluted
