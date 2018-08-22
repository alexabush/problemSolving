function mergeRanges(arr) {
  let sortedTimes = arr.sort((meeting1, meeting2) => {
    return meeting1.startTime > meeting2.startTime;
  });
  let busyTimes = [];
  for (let time of sortedTimes) {
    let isAdded = false;
    for (let busyTime of busyTimes) {
      if (
        time.startTime > busyTime.startTime &&
        time.endTime < busyTime.endTime
      ) {
        isAdded = true;
      } else if (
        time.startTime > busyTime.startTime &&
        time.startTime <= busyTime.endTime
      ) {
        busyTime.endTime = time.endTime;
        isAdded = true;
      }
    }
    if (!isAdded) {
      busyTimes.push(time);
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

// console.log(mergeRanges(times1));
/*
[
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]
*/

console.log(mergeRanges(nestedMeetings));
// [{ startTime: 1, endTime: 8 }];
