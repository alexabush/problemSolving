# Mesh Message

## What is the problem?

this seems like a pretty straightforward 'find the shortest route' style of problem
so we'll want to use bfs.

we'll start from our 'start' node and keep doing bfs until we find our 'end' node.

we need some way of recording the correct path, which I don't completely remember how to do at the moment.

I need some way to record the correct path.

Is there some way to work backwards?

No!

Turns out we need to store the path as we go.
Each time we find a new node, we should store what the currentNode was when we found it (basically, each time we discover a node we should record which node we discovered the new node FROM)
IC recommends we use an object. The object will have a key for every discovered node and the value will be the path from start to that node

This will work, but it will take up a lot of space.

for each new node we add to the queue, we'll want to add the node to the 'paths' object as well
the path for each node is the path of the current node, plus the new node

Trial implementation has some bugs, need to sort those out.

I'm only returning the middle node, 'amelia', which tells me that I'm not accumulating paths correctly
