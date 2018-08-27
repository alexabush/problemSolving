function twoEggs(secretDrop) {
  let floor = 0;
  let eggs = 2;
  let breakFloor = null;
  let targetFloor = null;
  for (let floor = 0; floor <= 100; floor += 10) {
    if (eggs < 0) {
      throw Error('I lose! :(');
    }
    if (floor > secretDrop) {
      eggs--;
      breakFloor = floor;
      floor = breakFloor - 10;
      break;
    }
  }

  for (floor; floor < breakFloor; floor += 1) {
    if (floor === secretDrop) {
      eggs--;
      targetFloor = floor - 1;
      break;
    }
  }

  if (eggs < 0) {
    throw Error('I lose! :(');
  }

  return targetFloor;
}
