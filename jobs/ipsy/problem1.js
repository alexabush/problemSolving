'use strict';

// Complete the electionWinner function below.
function electionWinner(votes) {
  let freq = {};
  let mostVotes = 0;

  //count votes
  for (let vote of votes) {
    if (freq[vote]) {
      freq[vote] += 1;
      if (freq[vote] > mostVotes) mostVotes += 1;
    } else {
      freq[vote] = 1;
    }
  }

  // get tied names
  let names = Object.entries(freq)
    .filter(entry => {
      let key = entry[0];
      let val = entry[1];
      if (val === mostVotes) return key;
    })
    .map(entry => entry[0])
    .sort();

  return names[names.length - 1];
}

const test1 = ['a', 'mi', 'h', 'd', 'mi', 'v', 'h', 'a', 'ma', 'ma'];

console.log(electionWinner(test1));
