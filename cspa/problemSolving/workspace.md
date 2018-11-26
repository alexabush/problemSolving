So we need to find the smallest number that can reach everybody

we can iterate over the passed in array and build up an object

we can track who is getting reached and by whom

the goal is to get everybody reached.

so we can build up who gets reached

we want to return array of the ids of the smallest number of influeners

so we DON'T need to track the most successful
we just need to track who has the highest number of followers

we actually may not need to track who has the highest number of followers

we should build up who follows who
we can sort by who has the highest number of followers?
so the trick is that we also need to take into account how influential those followers are.

So that's the problem.

So we need to know both who's being followed and who those followers are following.

users identified by unique user_id

users follow other users in a one-way influencer-follower relationship, denoted by the following tuple:

[influencer_id, follower_id]

influencers may share offers with their followers

followers may then share the offer with THEIR followers

write function 'findMinInfluencers"

should take a list of all followers in the system

return userId of minimum set to initially advertise offer to so that if they share the offer with their followers we can eventually reach 100% of the user base

we can assume that every user follows or is followed by at least one other user.

algo should return userId of minimal set of community influencers sorted from lowest to highest

Sounds like a graph problem.

We should return the userIds of the minimal set of nodes neccesary to reach the entire network
