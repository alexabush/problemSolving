function returnOverlap(rect1, rect2) {
  if (
    rect2.leftX >= rect1.leftX &&
    rect2.leftX <= rect1.leftX + rect1.width &&
    rect2.bottomY >= rect1.bottomY &&
    rect2.bottomY <= rect1.bottomY + rect1.height
  ) {
    let overlapLeftX = rect2.leftX;
    let overlapBottomY = rect2.leftX;
    let overlapWidth = (rect1.leftX + rect1.width < rect2.leftX + rect2.width) ? rect2.leftX - rect1.width
    };
    let overlapHeight;
    let overlappingArea = createRectangle(
      overlapLeftX,
      overlapBottomY,
      overlapWidth,
      overlapHeight
    );
    return 'overlap';
  } else {
    return 'No overlap';
  }
}

function createRectangle(leftX, bottomY, width, height) {
  return {
    leftX,
    bottomY,
    width,
    height
  };
}

const rectangle1 = createRectangle(1, 1, 6, 3);
const rectangle2 = createRectangle(5, 1, 2, 6);

console.log(returnOverlap(rectangle1, rectangle2));
//overlap
