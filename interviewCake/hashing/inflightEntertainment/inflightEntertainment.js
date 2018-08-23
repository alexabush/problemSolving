function canTwoMoviesFillFlight(movieLengths, flightLength) {
  for (let i = 0; i < movieLengths.length; i++) {
    for (let j = 1; j < movieLengths.length; j++) {
      if (movieLengths[i] + movieLengths[j] === flightLength) {
        return true;
      }
    }
  }

  return false;
}

console.log(canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7));
//true
