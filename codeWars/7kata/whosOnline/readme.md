# Who's Online?

## Problem

**input**
given input of array of objects
objects will contain username, status, and time since last activity

### Sample Input

`[{ username: 'David', status: 'online', lastActivity: 10 }, { username: 'Lucy', status: 'offline', lastActivity: 22 }, { username: 'Bob', status: 'online', lastActivity: 104 }]`

We want to find out which users are 'online', 'offline' and 'away'
We'll have different criteria for each:

1. Online: status is online AND lastActivity less than 10 minutes ago
2. Away: status is online AND lastActivity is MORE than 10 minutes ago
3. Offline: status is offline

We want to make an array

`{ online: [], offline: [], away: [] }`

where each user is listed in their respective array
note that we only need to add a key if there are values for that key

### Edge Cases

If the input is [], we should return {}

## Brainstorm

we need to process the input array
we can probably process the input array to the output array immediately without any intermediary steps
so we need to create the return array
we should add a test to return {} if the input string is empty
we should iterate over the input array
for each item, we'll use a conditional logic chain to determine if that user is online, away, offline
we'll want to add the key (online/offline/away) to the return object IF it doesn't exist in the return object yet and set the value to be an empty array.
Otherwise, we'll just push the username to the array at the right key
once we've iterated through the whole list, we'll return the return object

## Psudocode Steps

1. add conditional to return {} is the input is an empty array
2. create our return object
3. start iterating over the input array
4. for each item, add conditional logic:

- Online: status is online AND lastActivity less than 10 minutes ago
- Away: status is online AND lastActivity is MORE than 10 minutes ago
- Offline: status is offline

5. add the key (online/offline/away) to the return object IF it doesn't exist in the return object yet and set the value to be an empty array.
6. Add current username to array in return object at correct key
7. Once list has been iterated through, return the returnObject

## Debugging

First try got slight error, names that should be in offline got added to away

Something is likely wrong with my conditional logic

Error was with unintentional capitalization
