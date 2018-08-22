function mergeRanges(arr) {
  let sortedTimes = arr.sort((meeting1, meeting2) => {
    return meeting1.startTime > meeting2.startTime;
  });
  let busyTimes = [];
  for (let time of sortedTimes) {
    for (let busyTime of busyTimes) {
      if (
        time.startTime > busyTime.startTime &&
        time.startTime < busyTime.startTime
      ) {
        busyTime.endTime = time.endTime;
      } else {
        busyTimes.push(time);
      }
    }
  }
  return busyTimes;
}

const times = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 }
];

console.log(mergeRanges(times));

/*
  [
{ startTime: 0, endTime: 1 },
{ startTime: 3, endTime: 8 },
{ startTime: 9, endTime: 12 },
]
*/
