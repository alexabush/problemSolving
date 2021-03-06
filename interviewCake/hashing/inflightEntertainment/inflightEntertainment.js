function canTwoMoviesFillFlightn2(movieLengths, flightLength) {
  for (let i = 0; i < movieLengths.length; i++) {
    for (let j = 1; j < movieLengths.length; j++) {
      if (movieLengths[i] + movieLengths[j] === flightLength) {
        return true;
      }
    }
  }

  return false;
}

function canTwoMoviesFillFlightlognn(movieLengths, flightLength) {
  movieLengths = movieLengths.sort((a, b) => a > b);
  let low = 0;
  let high = movieLengths.length - 1;
  while (low < high) {
    if (movieLengths[low] + movieLengths[high] === flightLength) {
      return true;
    } else if (movieLengths[low] + movieLengths[high] < flightLength) {
      low++;
    } else if (movieLengths[low] + movieLengths[high] > flightLength) {
      high--;
    }
  }
  return false;
}

function canTwoMoviesFillFlight(movieLengths, flightLength) {
  let seen = new Set();
  for (let time of movieLengths) {
    if (seen.has(flightLength - time)) {
      return true;
    }
    seen.add(+time);
  }
  return false;
}

// console.log(canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7));
//true

console.log(canTwoMoviesFillFlight([2, 4], 1));
//false

// console.log(canTwoMoviesFillFlight([2, 4], 6));
//true
