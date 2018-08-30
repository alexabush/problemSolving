console.log('Practice makes Perfect!');
drawLine(0, 0, 3, 1)

function drawLine(x, y, length, depth) {
  verticalLine(length)
  horizontalLine(length)
}

function horizontalLine(length) {
  horizontalLine = ''
  for (let i = 0; i < length; i++) {
    horizontalLine += '-'
  }
  console.log(horizontalLine)
}

function verticalLine(length) {
  for (let i = 0; i < length; i++) {
    console.log('|')
  }
}