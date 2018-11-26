customer comes with a job to ship a large number of boxes across the country

boxes vary in weight

each truck can carry up to 10,000 pounds
ideally we should minimize the number of trucks to use for the job

assume volume is not a constraint and that truck load is limited only by weight

write 'trucks' function that takes a list of box weights and returns the minimum number of trucks to use

function should accept single argument (array of zero or more positive integers representing the weights of boxes)

function should return integer, number of trucks required to ship all boxes

cool, so we'll get a bunch of box weights
we know that we have a bunch of trucks that can carry 10,000 pound each

we need to find a way to inteligently divy the weight up between trucks so each truck can get as close to 10,000 pounds as possible without exceeding it.

Plan:

sort weights from heaviest to lightest

make 'trucks' counter, set to one by default.

if all weights sum to < 10,000, return 1
otherwise incrememt trucks

so we need to find how many trucks we'll need
the super naive solution is sumOfWeights / 10,000 = numTrucks, but there will be situations where a truck can handle < 10,000 pounds

we'll want to add the largest weight to a truck
