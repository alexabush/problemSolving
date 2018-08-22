function mergeRanges(arr) {
  let sortedTimes = arr.sort((meeting1, meeting2) => {
    return meeting1.startTime > meeting2.startTime;
  });
  let busyTimes = [sortedTimes[0]];
  for (let i = 1; i < sortedTimes.length; i++) {
    let isAdded = false;
    let busyTime = busyTimes[busyTimes.length - 1];
    if (
      sortedTimes[i].startTime > busyTime.startTime &&
      sortedTimes[i].endTime < busyTime.endTime
    ) {
      isAdded = true;
    } else if (
      sortedTimes[i].startTime > busyTime.startTime &&
      sortedTimes[i].startTime <= busyTime.endTime
    ) {
      busyTime.endTime = sortedTimes[i].endTime;
      isAdded = true;
    }
    if (!isAdded) {
      busyTimes.push(sortedTimes[i]);
    }
  }
  return busyTimes;
}

const times1 = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 }
];

const nestedMeetings = [
  { startTime: 1, endTime: 8 },
  { startTime: 2, endTime: 5 }
];

const multipleMerges = [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 }
];
console.log(mergeRanges(times1));
/*
[
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]
*/

console.log(mergeRanges(nestedMeetings));
// [{ startTime: 1, endTime: 8 }];

console.log(mergeRanges(multipleMerges));
// { startTime: 1, endTime: 10 }
